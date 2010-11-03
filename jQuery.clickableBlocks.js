$.fn.clickableBlocks = function ()
{
	return this.each (function () {
		var $this = $(this);
		var $anchor = $this.find("a");
		if ($anchor.length)
		{
			$this.css("cursor", "pointer").click (function ()
			{
				location.href = $anchor[0].href;
			});
		}
	});
}
