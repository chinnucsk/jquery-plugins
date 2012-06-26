(function($) {

	/**
	 * tabSize() is a jQuery plugin to convert tabs to spaces (mainly for <pre> blocks)
	 * so that your code looks the same in the browser as it does in your IDE
	 * 
	 * @param		{Number}		size				The number of spaces the tab should take up. Defaults to 4
	 * @param		{Boolean}		nonBreaking			An optional Boolean which inserts non-breaking space entities instead of normal spaces. Defaults to false
	 * @param		{Boolean}		overrideSupport		An optional Boolean which overrides browser support for tabSize, and forces the insertion of spaces. Defaults to false
	 * @returns		{jQuery}							The current jQuery object
	 * 
	 * @author		Dave Stewart
	 * @url			www.davestewart.co.uk
	 * @date		June 2012
	 */
	$.fn.tabSize = function(size, nonBreaking, overrideSupport)
	{
		// functions
			function setTabSize()
			{
				this.style[property] = size;
			}
		
			function convertSpaces()
			{
				// variables
					var text	= this.innerHTML;
					var lines	= text.split(/\n/g);
					var text	= '';
					
				// do it
					for(var i = 0; i < lines.length; i++)
					{
						var input	= lines[i];
						var output	= '';
						var length	= 0;
						for(var j = 0; j < input.length; j++)
						{
							var char = input[j];
							if(char !== '\t')
							{
								output += char;
								length ++;
							}
							else
							{
								var vLength		= length + size;
								var maxLength	= Math.floor(vLength / size) * size;
								while(length < maxLength)
								{
									output += space;
									length ++;
								}
							}
						}
						text += output + '\n';
					}
					
				// update
					this.innerHTML = text;
			}
		
		// parameters
			size			= Number(size) || 4;
			
		// variables
			var space		= !! nonBreaking ? '&nbsp;' : ' ';
			var property	= getSupportedProperty('tabSize');
			
		// code
			if( ! property || overrideSupport )
			{
				return this.each(convertSpaces);
			}
			else
			{
				return this.each(setTabSize);
			}
    };
	
	function getSupportedProperty(prop)
	{
		// parameters
			prop			= prop.replace(/^[a-z]/, function(val) { return val.toUpperCase(); });
		
		// variables
			var div			= document.createElement('div')
			var prefixes	= [''].concat('Moz Webkit Ms O Khtml'.split(' '));
		
		// detect property support
			for(var i in prefixes)
			{
				var property = prefixes[i] + prop;
				if (property in div.style)
				{
					return property;
				}
			}
			
		// no property support!
			return false;
	}

})(jQuery);