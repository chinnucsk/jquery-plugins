jquery.tabSize
==============

tabSize is a jQuery plugin for setting the CSS tabSize of an element (if supported) 
or else it correctly converts tabs to spaces in unsupported browsers.

Below is an example of code copied from an IDE with 4-space tabs size, to a browser 
with 8-space tabs size.

    |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |
    Rank    Artist                  Song                                    Year
    1               Queen                   Bohemian Rhapsody               1975
    2               John Lennon             Imagine                                 1980
    3               Robbie Williams Angels                                  1997
    4               Beatles                 Hey Jude                                1968
    5               Nirvana                 Smells Like Teen Spirit 1991
    6               Oasis                   Live Forever                    1994
    7               Oasis                   Wonderwall                              1995
    8               U2                              One                                             1992
    9               Verve                   Bitter Sweet Symphony   1997
    10              U2                              With Or Without You             1987
    
After running the plugin, the element's CSS tabSize property is either set to 4, or 
if unsupported, tabs are correctly converted to spaces, lining up the text columns
as expected:

    jQuery('pre').tabSize(4);

    |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |
    Rank    Artist          Song                    Year
    1       Queen           Bohemian Rhapsody       1975
    2       John Lennon     Imagine                 1980
    3       Robbie Williams Angels                  1997
    4       Beatles         Hey Jude                1968
    5       Nirvana         Smells Like Teen Spirit 1991
    6       Oasis           Live Forever            1994
    7       Oasis           Wonderwall              1995
    8       U2              One                     1992
    9       Verve           Bitter Sweet Symphony   1997
    10      U2              With Or Without You     1987