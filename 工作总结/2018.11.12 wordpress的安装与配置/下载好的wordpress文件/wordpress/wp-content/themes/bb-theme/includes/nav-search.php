<div class="fl-page-nav-search">
	<a href="javascript:void(0);" class="fas fa-search"></a>
	<form method="get" role="search" action="<?php echo esc_url( home_url( '/' ) ); ?>" title="<?php echo esc_attr_x( 'Type and press Enter to search.', 'Search form mouse hover title.', 'fl-automator' ); ?>">
		<input type="search" class="fl-search-input form-control" name="s" placeholder="<?php echo esc_attr_x( 'Search', 'Search form field placeholder text.', 'fl-automator' ); ?>" value="<?php echo get_search_query(); ?>" />
	</form>
</div>
