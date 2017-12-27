<form id="obs" method="get" action="http://software.opensuse.org/search" class="input-group input-group-lg">
    <input id="obs-q" type="text" name="q" value="" class="form-control mr-2" placeholder="Search for package"/>
    	<select name="baseproject"  class="btn btn-secondary mr-2 hidden-sm-down" onchange='changeAction(this.value)'>
		<option value="openSUSE:Factory">Tumbleweed</option>
		<option value="openSUSE:42.3">42.3</option>
		<option value="openSUSE:42.2">42.2</option>
	</select>

        <button class="btn btn-primary mr-2" type="submit">
		<span class="typcn typcn-lg typcn-zoom-outline"></span>
		<span class="hidden-xs-down">Search</span>
	</button>
</form>
