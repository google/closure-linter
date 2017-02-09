# Closure Linter - a style checker for ES5 JavaScript

Please note that the **closure linter is deprecated**. Esp. if you use ES6
features, the tool will not work for you.

*   For formatting related issues, please use `clang-format`.
*   For other checks, you can use the closure compiler along with the
    `--jscomp_warnings=lintChecks` flag. See also
    https://developers.google.com/closure/utilities/

## Installation

To install the application, run `python ./setup.py install`

After installing, you get two helper applications installed into `/usr/local/bin`:

* `gjslint.py` - runs the linter and checks for errors
* `fixjsstyle.py` - tries to fix errors automatically
