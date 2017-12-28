<form id="searchForm" class="input-group input-group-lg" action="https://www.qwant.com/" method="GET">
	<button type="button" class="btn btn-link mr-2" data-toggle="modal" data-target="#search-config-modal">
		<span class="typcn typcn-lg typcn-spanner-outline"></span>
	</button>
	<input class="form-control mr-2" type="text" name="q" lang="en" placeholder="Search the web"/>
	<button class="btn btn-primary mr-2" type="submit">
		<span class="typcn typcn-lg typcn-zoom-outline"></span>
		<span class="hidden-xs-down" lang="en">Search</span>
	</button>
</form>

<!-- Modal -->
<div class="modal fade" id="search-config-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
	<div class="modal-dialog" role="document">
		<div class="modal-content">
			<div class="modal-header">
				<h5 class="modal-title" id="exampleModalLabel" lang="en">Change search provider</h5>
				<button type="button" class="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true">&times;</span>
				</button>
			</div>
			<div class="modal-body">
				<select id="sel" class="form-control mr-2" onchange="saveSearch(this.value);">
					<option value="https://www.qwant.com/">Qwant</option>
					<option value="https://google.com/search">Google</option>
					<option value="https://duckduckgo.com/">DuckDuckGo</option>
					<option value="https://bing.com/">Bing</option>
					<option value="https://yahoo.com/search">Yahoo</option>
					<option value="https://startpage.com/do/search">Startpage</option>
				</select>
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-secondary" lang="en" data-dismiss="modal">Cancel</button>
				<button type="button" class="btn btn-primary" lang="en" data-dismiss="modal">Save</button>
			</div>
		</div>
	</div>
</div>
