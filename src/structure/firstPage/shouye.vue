
<template>
	<div>
	<div id="header">
		<div class="nav-global">
			<div class="container">
				<h1 class="nav-logo">
					<a href="javascript:;"></a>
				</h1>
				<ul class="nav-aside">
					<!--active-->
					<li class="nav-cart">
						<a href="javascript:;">购物车</a>
						<!--根据class改变颜色-->
						<span class="cart-empty-num cart-num">
							<i>0</i>
						</span>
						<!-- -->
						<div class="nav-cart-wrapper" style="display: none;">
							<div class="nav-cart-list">
								<!--购物车为空提示-->
								<div class="empty">
									<h3>购物车为空</h3>
									<p>您还没有选购任何商品，现在前往商城选购吧!</p>
								</div>
								<!--小购物车-->
								<div class="full">
									<div class="nav-cart-items">
										<ul>
											<li class="clear">
												<div class="cart-item js-cart-item cart-item-sell">
													<div class="cart-item-inner">
														<div class="item-thumb">
															<img src="@/assets/img/goods/1.png">
														</div>
														<div class="item-desc">
															<div class="cart-cell">
																<h4>
																	<a href="#/item/100027401">坚果 Pro 钢化玻璃保护膜（前屏用）</a>
																</h4>
																<p class="attrs">
																	<span>透明</span>
																</p>
																<h6>
																	<span class="price-icon">¥</span><span class="price-num">49</span><span class="item-num">x 1</span>
																</h6>
															</div>
														</div>
														<div class="del-btn">删除</div>
													</div>
												</div>
											</li>
										</ul>
									</div>
									<div class="nav-cart-total">
										<p>共 <strong class="ng-binding">1</strong> 件商品</p>
										<h5>合计：<span class="price-icon">¥</span><span class="price-num ng-binding" ng-bind="cartMenu.totalPrice">49</span></h5>
										<h6>
											<a ng-href="http://www.smartisan.com/shop/#/cart" class="nav-cart-btn" href="http://www.smartisan.com/shop/#/cart">去购物车</a>
										</h6>
									</div>
								</div>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<!-- 这里一个displaynone -->
		<div class="nav-sub" >
			<div class="nav-sub-wrapper">
				<div class="container">
					<ul class="nav-list">
						<li><a href="javascript:;">首页</a></li>
						<li><a href="javascript:;">手机</a></li>
						<li><a href="javascript:;">“足迹系列”手感膜</a></li>
						<li class="active"><a href="javascript:;">官方配件</a></li>
						<li><a href="javascript:;">周边产品</a></li>
						<li><a href="javascript:;">第三方配件</a></li>
						<li><a href="javascript:;">全部商品</a></li>
						<li><a href="javascript:;">服务</a></li>
					</ul>
				</div>
			</div>
		</div>
	</div>
	<div id="main">
		<div class="sku-box store-content">
			<!-- 这里面有一个displaynone -->
			<div class="sort-option">
				<ul class="line clear">
					<li><a href="javascript:;" class="active">综合排序</a></li>
					<li><a href="javascript:;" class="">销量排序</a></li>
					<li><a href="javascript:;" class="">价格低到高</a></li>
					<li><a href="javascript:;" class="">价格高到低</a></li>
				</ul>
			</div>
			<div class="gray-box">
				<div class="item-box">
					<div class="item">
						<div class="item-img">
							<img alt="Smartisan 快充移动电源 10000mAh" src="http://image.smartisanos.cn/resource/ae40a16324658c192c7361d829f603bd.jpg?x-oss-process=image/resize,w_206/quality,Q_80/format,webp">
						</div>
						<h6>Smartisan 快充移动电源 10000mAh</h6>
						<h3>10000mAh 双向快充、轻盈便携、高标准安全保护</h3>
						<div class="params-colors">
							<ul class="colors-list">
								<li>
									<span class="active">
										<img src="http://img01.smartisanos.cn/attr/v2/1000299/B37F37544921114CEF1EC01ED4DF44E4/20X20.jpg">
									</span>
								</li>
								<li>
									<span>
										<img src="http://img01.smartisanos.cn/attr/v2/1000299/B37F37544921114CEF1EC01ED4DF44E4/20X20.jpg">
									</span>
								</li>
							</ul>
						</div>
						<div class="item-btns clearfix">
							<span class="item-gray-btn">
								<a href="javascript:;" target="_blank">查看详情</a> 
							</span>
							<span class="item-blue-btn">加入购物车 </span>
						</div>
						<div class="item-price clearfix">
							<i>¥</i><span>199.00</span>
						</div>
						<!-- <div class="discount-icon">false</div> -->
						<div class="item-cover">
							<a href="javascript:;" target="_blank"></a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
</template>



