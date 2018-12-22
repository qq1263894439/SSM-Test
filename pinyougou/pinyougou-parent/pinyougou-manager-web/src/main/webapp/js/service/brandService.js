//品牌服务
app.service("brandService",function($http){
	this.findAll=function(){
		//查询所有品牌列表
	return	$http.get('../brand/findAll.do');
	}
	this.findPage= function(page,size){
		return	$http.get('../brand/findPage.do?page='+page +'&size='+size);
	}	
	this.findOne=function(id){
		return $http.get('../brand/findOne.do?id='+id);
	}
	this.add=function(entity){
		return $http.post('../brand/add.do',entity);
	}
	this.update=function(entity){
		return $http.post('../brand/update.do',entity);
	}
	this.dele=function(ids){
		//获取选中的复选框
		return	$http.get('../brand/delete.do?ids='+ids);
	}	
	this.search= function(page,size,searchEntity){
		return	$http.post('../brand/search.do?page='+page +'&size='+size,searchEntity)
	}
	//下拉列表
	this.selectOptionList=function(){
		return $http.get('../brand/selectOptionList.do');
	}
});