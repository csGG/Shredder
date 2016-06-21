$(function(){
	var DOM = {
		btnDone : $('.w_done')
	}

	/*
	角色分配页面
	 */

	//编辑
	$('.table tbody tr').each(function(){
		var oaUser = $(this).children('td').eq(0).text(),
			businessL = $(this).children('td').eq(2).text(),
			userP = $(this).children('td').eq(3).text();
		$(this).find('td').eq(6).children().eq(0).click(function(){
			var obj = $(this);
			$('.mask').show();
			$('.oa').val(oaUser);
			$('#sBusiness').html(businessL);
			$('.selected-line').html('<span>'+userP+'</span>');
			$('.selected-line').css('margin-top','10px');
			$('.choose .c-radiu').find('input').attr('checked',false);
		});
	});

	//禁用
	$('.table tbody tr').each(function(){
		$(this).find('td').eq(6).children().eq(1).click(function(){
			var obj = $(this);
			if(obj.text() == '禁用'){
				obj.parent().siblings('td').eq(4).html('禁用');
				obj.html('正常');
			}
			else{
				obj.parent().siblings('td').eq(4).html('正常');
				obj.html('禁用');
			}
		});
	});


	//选择业务线下拉
	$(document).on('click','.dropB',function(){
		var obj = $(this);
		obj.siblings('.c-option').slideDown();
	});
	//DOM.bOption.mouseleave(function(){
	//	$(this).slideUp();
	//});
	$(document).on('click','.c-option li',function(){
		var liVal = $(this).text();
		$(this).parents('.c-option').siblings('.dropB').html(liVal);
		$(this).parents('.c-option').hide();
	});

	//选择管辖范围
	$(document).on('click','.noneP',function(){
		alert('1');
		var obj = $(this);
		noneP(obj);
	});
	$(document).on('click','.all58',function(){
		var obj_a = $(this);
		all58(obj_a);
	});
	function noneP(obj) {
			if (obj.siblings('.np').prop('checked') == false) {
				obj.siblings('.dropB').attr('disabled', true).html('选择业务线');
				obj.siblings('.ap').attr('checked', false);
				obj.parents('.c-item').siblings('.c-item').find('.btnP').attr('disabled', true).css('cursor', 'default');
				obj.parents('.c-item').siblings('.c-item').find('.selected-line').html('');
				obj.siblings('.c-option').hide();
			}
			else {
				obj.siblings('.dropB').attr('disabled', false);
				obj.parents('.c-item').siblings('.c-item').find('.btnP').removeAttr('disabled').css('cursor', 'pointer');
			}
	}
	function all58(obj_a) {
			if (obj_a.siblings('.ap').prop('checked') == false) {
				obj_a.siblings('.dropB').attr('disabled', true).html('选择业务线');
				obj_a.siblings('.np').attr('checked', false);
				obj_a.parents('.c-item').siblings('.c-item').find('.btnP').attr('disabled', true).css('cursor', 'default');
				obj_a.parents('.c-item').siblings('.c-item').find('.selected-line').html('');
				obj_a.siblings('.c-option').hide();
			}
			else {
				obj_a.siblings('.dropB').attr('disabled', false);
				obj_a.parents('.c-item').siblings('.c-item').find('.btnP').removeAttr('disabled').css('cursor', 'pointer');
				obj_a.parents('.c-item').siblings('.c-item').find('.selected-line').html('');
			}
	}
	
	//选择角色
	$(document).on('click','.btnR',function(){
		$(this).siblings('.select-role').slideDown();
	});
	$(document).on('click','.confirm',function(){
		$(this).parents('.select-role').siblings('.selected-role').html('');
		$(this).parents('.select-role').find('li input:checked').each(function(){
			var role = $(this).siblings('span').text();
			$(this).parents('.select-role').siblings('.selected-role').append('<span>'+role+'</span>');
			$(this).parents('.select-role').hide();
		});
	});
	$(document).on('click','.cancel',function(){
		$(this).parents('.select-role').find('input').attr('checked',false);
		$(this).parents('.select-role').hide();
	});

	//选择部门
	$(document).on('click','.btnP',function(){
		$(this).siblings('.select-line').slideDown();
	});
	$(document).on('click','.lineCa',function(){
		$(this).parents('.select-line').slideUp();
	});
	$(document).on('click','.select-line .c-line .drop',function(){
		var obj = $(this);
		if(obj.siblings('.level2').length > 0){
			if(obj.hasClass('btn-unfold')){
				obj.siblings('.level2').slideDown();
				obj.removeClass('btn-unfold').addClass('btn-fold');
			}
		}
	});
	//部门展开
	$('.select-line .c-line .drop').on('click',function(){
		var obj = $(this);
		if(obj.siblings('.level2').length > 0){
			if(obj.hasClass('btn-unfold')){
				obj.siblings('.level2').slideDown();
				obj.removeClass('btn-unfold').addClass('btn-fold');
			}
			else{
				obj.siblings('.level2').slideUp();
				obj.removeClass('btn-fold').addClass('btn-unfold');
			}
		}
	});
	$(document).on('click','.select-line .c-line .pName',function(){
		var obj = $(this),
			objVal = obj.text();
		obj.parents('.select-line').siblings('.selected-line').html('<span>'+objVal+'</span>');
		obj.parents('.select-line').hide();
		obj.parents('.select-line').siblings('.selected-line').css('margin-top','10px');
	});

	//添加角色及部门
	$(document).on('click','.add-line',function(){
		var obj = $(this),
			index = $('.dialog .d-content dd').length;
		var addHtml = '<dd>' +
			'<div class="choose" style="margin-left: 95px;">'+
				'<div class="c-item c-radiu">'+
					'<button class="selected dropB">选择业务线</button>'+
					'<span class="arrow-down"></span>'+
					'<input type="checkbox" id="noneP_'+index+'" class="np" data-val = "无管辖部门">'+
					'<label for="noneP_'+index+'" class="noneP"></label>'+
					'<input type="checkbox" id="all58_'+index+'" class="ap" data-val = "管辖58赶集集团">'+
					'<label for="all58_'+index+'"  class="all58"></label>'+
					'<ul class="c-option">'+
						'<li>房产</li>'+
						'<li>英才招聘</li>'+
						'<li>二手车</li>'+
						'<li>客服</li>'+
						'<li>渠道</li>'+
					'</ul>'+
				'</div>'+
				'<div class="c-item">'+
					'<button class="btn btnP w125">选择部门</button>'+
					'<div class="selected-line">'+
					'		</div>'+
					'<div class="select-line">'+
					'<div class="c-line">'+
						'<p class="bLine">房产事业群</p>'+
						'<ul class="level-top">'+
							'<li>'+
								'<span class="btn-unfold drop"></span>'+
								'<span class="pName">房产技术部</span>'+
								'<ul class="level2">'+
									'<li>'+
									'<span class="btn-unfold drop"></span>'+
									'<span class="pName">二手房销售部</span>'+
										'<ul class="level2">'+
											'<li>'+
											'<span class="btn-fold drop"></span>'+
											'<span class="pName">二手房销售部</span>'+
											'</li>'+
										'</ul>'+
									'</li>'+
									'<li>'+
										'<span class="btn-unfold drop"></span>'+
										'<span class="pName">二手房销售部</span>'+
									'</li>'+
								'</ul>'+
							'</li>'+
						'</ul>'+
				'</div>'+
				'<div class="center">' +
					'<button class="btn lineCa">取消</button>'+
				'</div>'+
					'</div>'+
						'</div>'+
				'<div class="c-item">'+
					'<button class="btn btnR w125">选择角色</button>'+
					'	<div class="selected-role">'+
						'</div>'+
					'<div class="select-role">'+
						'<ul>'+
							'<li>'+
								'<input type="checkbox" id="c_">'+
								'<label for="c_"></label>'+
								'<span>销售任务管理</span>'+
							'</li>'+
							'<li>'+
								'<input type="checkbox" id="c_">'+
								'<label for="c_"></label>'+
								'<span>财务</span>'+
							'</li>'+
						'</ul>'+
						'<div class="cc">'+
							'<a href="javascript:;" class="btn w55 confirm">确认</a>'+
							'<a href="javascript:;" class="btn w55 cancel">取消</a>'+
						'</div>'+
					'</div>'+
				'</div>'+
			'</div>'+
			'<span class="del-line">' +
			'<span/>'+
			'</dd>';
		$('.dialog .d-content dl').append(addHtml);
	});
	$(document).on('click','.d-content .del-line',function(){
		$(this).parents('dd').remove();
	});

	//提交
	DOM.btnDone.click(function(){
		var oa = $('.oa').val(),
			noneP = $('#noneP').prop('data-val'),
			all58 = $('#all58').prop('data-val');
		if(oa == ''){
			return false;
		}
		else{
			//异步提交
			$.ajax({
				type : 'POST',
				url : '',
				dataType : 'json',
				data : {

				},
				success : function(data){

				},
				error : function(data){

				}
			});
		}
	});

	//关闭
	$('.close').click(function(){
		$(this).parents('.mask-c').html('');
	});

	/*
	 *互斥角色
	 */
	
	//新建角色
	$('.new-role').click(function(){
		$(this).parents('.action').siblings('.mask').show();
	});

	//禁用
	$('.tRole tbody tr').each(function(){
		$(this).find('td').eq(2).children().eq(1).click(function(){
			var obj = $(this);
			if(obj.text() == '禁用'){
				obj.parent().siblings('td').eq(1).html('禁用');
				obj.html('正常');
			}
			else{
				obj.parent().siblings('td').eq(1).html('正常');
				obj.html('禁用');
			}
		});
	});


	//添加角色
	$('.add-role').on('click',function(){
		var obj = $(this),
			index = $('.dialog-role .d-content dd').length + 1;
		var html_ = '<dd>' +
			'<label class="must">*</label>' +
			'<label class="tag-r">角色'+index+'</label>' +
			'<button class="selected middle" style="margin-left: 10px;"></button>'+
			'<span class="arrow"></span>'+
			'<select class="optionR">'+
				'<option selected="selected">请选择</option>'+
				'<option>1</option>'+
				'<option>2</option>'+
			'</select>'+
			'</dd>';
		$('.dialog-role .d-content dl').append(html_);
		mSelect();
	});
	function mSelect(){
		$('.d-content .selected').each(function(){
			var obj = $(this);
			obj.html(obj.siblings('.optionR').find('option:selected').val());
		});
		$('.optionR').change(function(){
			var obj_o = $(this);
			var sVal = obj_o.find('option:selected').val();
			obj_o.siblings('.selected').html(sVal);
		});
	}
});