// Copyright 2008 The Closure Linter Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// -14: MISSING_GOOG_REQUIRE
// -15: MISSING_GOOG_PROVIDE
// Missing provides and requires are reporteed on line 1.  We are missing a
// provide of goog.something.Else and a require of goog.Class.Enum and
// goog.otherthing.Class.Enum.

/**
 * @fileoverview The same code as require_provide_ok, but missing a provide
 * and a require call.
 *
 *
 */

goog.provide('goog.something');

goog.require('goog.Class');
goog.require('goog.package');


var x = new goog.Class();
goog.package.staticFunction();

var y = goog.Class.Enum.VALUE;

/**
 * Private variable.
 * @type {number}
 * @private
 */
goog.something.private_ = 10;

/**
 * Static function.
 */
goog.something.staticFunction = function() {
};

/**
 * Constructor for Else.
 * @constructor
 */
goog.something.Else = function() {
  // Bug 1801608: Provide goog.otherThing.Class.Enum isn't missing.
  var enum = goog.otherthing.Class.Enum;
  goog.otherThing.Class.Enum = enum;
};
