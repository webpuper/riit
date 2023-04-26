<!DOCTYPE HTML>
<html manifest="">
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">

    <title>{{ config('app.name', 'appUsers / ExtJS 6 + Laravel') }}</title>

    <script type="text/javascript">
        var Ext = Ext || {};

        Ext.beforeLoad = function(tags) {
            var s = location.search,
                profile;

            if (s.match(/\bclassic\b/)) {
                profile = 'classic';
            } else if (s.match(/\bmodern\b/)) {
                profile = 'modern';
            } else {
                profile = tags.desktop ? 'classic' : 'modern';
                // profile = tags.phone ? 'modern' : 'classic';
            }

            Ext.manifest = profile;
        };
    </script>

    <script id="microloader" data-app="1d40390c-f765-4f9f-b2a1-f340d1000053" type="text/javascript" src="{{ asset('bootstrap.js') }}"></script>

</head>

<body></body>

</html>