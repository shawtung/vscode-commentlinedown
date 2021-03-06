# Comment Line Down

If you have migrated from Webstorm to VSCode, you may find that the `toggle line comment` command differs between the two. The former will move to the next line after commenting a line while the latter won't. I'm used to the Webstorm style, but fail in finding similar settings or workarounds in VSCode, so this extension comes out. 

## Feature

Auto exec command `cursorDown` after toggle line comment, moving cursor to the next line.

## Configuration

* `commentLineDown.cursorPosition` - specifies the inline position of cursor after cursor down.  

  * `home`  
    ![home](images/home.gif)

  * `in situ` (default)  
    ![in situ](images/insitu.gif)

  * `end`  
    ![end](images/end.gif)
