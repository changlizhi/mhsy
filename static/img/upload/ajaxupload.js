	<div class="form-group">
			<input class="form-control uniform_on" id="AboutFile" name="AboutFile" type="file">
	</div>  																				
	
	<button class="btn btn-default" onclick="AboutFileUpload()"><i class="glyphicon glyphicon-upload glyphicon-white"></i> Update</button><br/><br/>




        function AboutFileUpload(){	   //点击上传
		        if($("#client_id").val()=="") { alert('保存客户资料后才能上传文档！');return }
				if ($('input[id=AboutFile]').val()=="") {
					alert("未获取到文件");
					return;					
				}
				var formData = new FormData($('form')[0]);
				$.ajax({
					url:'/AddPicUpload',
					type:'POST',
					contentType:'multipart/form-data',
					data:formData,
					cache:false,
			        contentType:false,
			        processData:false,	
					success:function(data){ 
					    if(data!="") {
							if($("#wdmc").val()=="") {
								$("#wdmc").val()=data;
							}
							$.ajax({  //先上传，再建立关联
								type:"POST",
								url:"/Ajax",
								data:{ Method:"AboutFileUpload", FileName:data, Name: $("#wdmc").val(), ClientId:$("#client_id").val(), FileType:$("#wdlx").val() },
								success:function(data){
			                           alert("关联文件已上传！");
									 },
								error: function(){}
							});	
						}
					},
					error:function(){ alert("上传错误！"); },
				});
		}		