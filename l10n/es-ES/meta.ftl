# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

-language-full-name = Español (España)
-language-short-name = Español (España)
-language-short-code = ES

language-select-format = { $percent ->
        [100] { $name }
       *[other] { $name } - { $percent }%
    }

language-not-localised = 
    Este idioma está solo del { $percent }% traducido.
    Algunas partes de la página aparecerán en { $fallback-lang }. 
    
    <contribute-btn>Contribuir al { -language-short-name }</contribute-btn>

page-title-format = { $title } ― { -brand-full-name } ({ -language-short-code })