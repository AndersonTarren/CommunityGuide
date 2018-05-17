# CommunityGuide

This Lightning Component is a proof-of-concept to try to mirror how users are guided through the Community Builder.  In this case, we guide users through features of the community itself.

Input for this component is an array of objects in JSON notation.

__Object attributes are the following :__
```
'isWelcome' : [boolean] - include this attr as true for the first object - as a welcome message.
'target' : [string] - this is the css class of the item you are targeting.  It will use the first instance.
'subject' : [string] - title shown in the flyout.
'body' : [string] - body of the flyout text.
'flag' : [string] - position of the flyout pointer.  (top-left, right-top, etc) [https://www.lightningdesignsystem.com/components/tooltips/]
'offsetTop' : [number] - offset in pixels from top based on target element
'offsetLeft' : [number] - offset in pixels from left based on target element
```

__This is an example of input.__  

[
            {
                'isWelcome' : true,
                'target' : 'search-field-group',
                'subject' : 'Welcome to TDev Community',
                'body' : 'Allow us to walk you through various features of our community!',
                'flag' : '',
                'offsetTop' : 0,
                'offsetLeft' : 0
            },
            {
                'target' : 'search-field-group',
                'subject' : 'Search',
                'body' : 'The search feature provides quick access to records you have permission to view.',
                'flag' : 'top-left',
                'offsetTop' : 45,
                'offsetLeft' : 0
            },
            {
                'target' : 'comm-navigation__list',
                'subject' : 'Navigation',
                'body' : 'This is the main navigation.  It will provide easy access to pages',
                'flag' : 'top-left',
                'offsetTop' : 35,
                'offsetLeft' : 0
            }
        ]
