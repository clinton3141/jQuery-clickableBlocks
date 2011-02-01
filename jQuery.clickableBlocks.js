$.fn.clickableBlocks = function ()
{
	return this.each (function () {
		var $this = $(this),
			$anchor = $this.find("a");
		// only apply behaviour if there is a single link otherwise it's ambiguous
		if ($anchor.length == 1)
		{
			$this.css("cursor", "pointer").click (function ()
			{
				location.href = $anchor[0].href;
			});
		}
	});
}
