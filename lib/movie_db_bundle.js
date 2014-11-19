'use strict';var COMPILED=!0,goog=goog||{};goog.global=this;goog.isDef=function(a){return void 0!==a};goog.exportPath_=function(a,b,c){a=a.split(".");c=c||goog.global;a[0]in c||!c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&goog.isDef(b)?c[d]=b:c=c[d]?c[d]:c[d]={}};
goog.define=function(a,b){var c=b;COMPILED||(goog.global.CLOSURE_UNCOMPILED_DEFINES&&Object.prototype.hasOwnProperty.call(goog.global.CLOSURE_UNCOMPILED_DEFINES,a)?c=goog.global.CLOSURE_UNCOMPILED_DEFINES[a]:goog.global.CLOSURE_DEFINES&&Object.prototype.hasOwnProperty.call(goog.global.CLOSURE_DEFINES,a)&&(c=goog.global.CLOSURE_DEFINES[a]));goog.exportPath_(a,c)};goog.DEBUG=!0;goog.LOCALE="en";goog.TRUSTED_SITE=!0;goog.STRICT_MODE_COMPATIBLE=!1;
goog.provide=function(a){if(!COMPILED&&goog.isProvided_(a))throw Error('Namespace "'+a+'" already declared.');goog.constructNamespace_(a)};goog.constructNamespace_=function(a,b){if(!COMPILED){delete goog.implicitNamespaces_[a];for(var c=a;(c=c.substring(0,c.lastIndexOf(".")))&&!goog.getObjectByName(c);)goog.implicitNamespaces_[c]=!0}goog.exportPath_(a,b)};
goog.module=function(a){if(!goog.isString(a)||!a)throw Error("Invalid module identifier");if(!goog.isInModuleLoader_())throw Error("Module "+a+" has been loaded incorrectly.");if(goog.moduleLoaderState_.moduleName)throw Error("goog.module may only be called once per module.");goog.moduleLoaderState_.moduleName=a;if(!COMPILED){if(goog.isProvided_(a))throw Error('Namespace "'+a+'" already declared.');delete goog.implicitNamespaces_[a]}};goog.module.get=function(a){return goog.module.getInternal_(a)};
goog.module.getInternal_=function(a){if(!COMPILED)return goog.isProvided_(a)?a in goog.loadedModules_?goog.loadedModules_[a]:goog.getObjectByName(a):null};goog.moduleLoaderState_=null;goog.isInModuleLoader_=function(){return null!=goog.moduleLoaderState_};goog.module.declareTestMethods=function(){if(!goog.isInModuleLoader_())throw Error("goog.module.declareTestMethods must be called from within a goog.module");goog.moduleLoaderState_.declareTestMethods=!0};
goog.module.declareLegacyNamespace=function(){if(!COMPILED&&!goog.isInModuleLoader_())throw Error("goog.module.declareLegacyNamespace must be called from within a goog.module");if(!COMPILED&&!goog.moduleLoaderState_.moduleName)throw Error("goog.module must be called prior to goog.module.declareLegacyNamespace.");goog.moduleLoaderState_.declareLegacyNamespace=!0};
goog.setTestOnly=function(a){if(COMPILED&&!goog.DEBUG)throw a=a||"",Error("Importing test-only code into non-debug environment"+(a?": "+a:"."));};goog.forwardDeclare=function(a){};COMPILED||(goog.isProvided_=function(a){return a in goog.loadedModules_||!goog.implicitNamespaces_[a]&&goog.isDefAndNotNull(goog.getObjectByName(a))},goog.implicitNamespaces_={"goog.module":!0});
goog.getObjectByName=function(a,b){for(var c=a.split("."),d=b||goog.global,e;e=c.shift();)if(goog.isDefAndNotNull(d[e]))d=d[e];else return null;return d};goog.globalize=function(a,b){var c=b||goog.global,d;for(d in a)c[d]=a[d]};goog.addDependency=function(a,b,c,d){if(goog.DEPENDENCIES_ENABLED){var e;a=a.replace(/\\/g,"/");for(var f=goog.dependencies_,g=0;e=b[g];g++)f.nameToPath[e]=a,f.pathIsModule[a]=!!d;for(d=0;b=c[d];d++)a in f.requires||(f.requires[a]={}),f.requires[a][b]=!0}};
goog.ENABLE_DEBUG_LOADER=!0;goog.logToConsole_=function(a){goog.global.console&&goog.global.console.error(a)};goog.require=function(a){if(!COMPILED){if(goog.isProvided_(a))return goog.isInModuleLoader_()?goog.module.getInternal_(a):null;if(goog.ENABLE_DEBUG_LOADER){var b=goog.getPathFromDeps_(a);if(b)return goog.included_[b]=!0,goog.writeScripts_(),null}a="goog.require could not find: "+a;goog.logToConsole_(a);throw Error(a);}};goog.basePath="";goog.nullFunction=function(){};
goog.identityFunction=function(a,b){return a};goog.abstractMethod=function(){throw Error("unimplemented abstract method");};goog.addSingletonGetter=function(a){a.getInstance=function(){if(a.instance_)return a.instance_;goog.DEBUG&&(goog.instantiatedSingletons_[goog.instantiatedSingletons_.length]=a);return a.instance_=new a}};goog.instantiatedSingletons_=[];goog.LOAD_MODULE_USING_EVAL=!0;goog.SEAL_MODULE_EXPORTS=goog.DEBUG;goog.loadedModules_={};goog.DEPENDENCIES_ENABLED=!COMPILED&&goog.ENABLE_DEBUG_LOADER;
goog.DEPENDENCIES_ENABLED&&(goog.included_={},goog.dependencies_={pathIsModule:{},nameToPath:{},requires:{},visited:{},written:{}},goog.inHtmlDocument_=function(){var a=goog.global.document;return"undefined"!=typeof a&&"write"in a},goog.findBasePath_=function(){if(goog.global.CLOSURE_BASE_PATH)goog.basePath=goog.global.CLOSURE_BASE_PATH;else if(goog.inHtmlDocument_())for(var a=goog.global.document.getElementsByTagName("script"),b=a.length-1;0<=b;--b){var c=a[b].src,d=c.lastIndexOf("?"),d=-1==d?c.length:
d;if("base.js"==c.substr(d-7,7)){goog.basePath=c.substr(0,d-7);break}}},goog.importScript_=function(a,b){(goog.global.CLOSURE_IMPORT_SCRIPT||goog.writeScriptTag_)(a,b)&&(goog.dependencies_.written[a]=!0)},goog.IS_OLD_IE_=goog.global.document&&goog.global.document.all&&!goog.global.atob,goog.importModule_=function(a){goog.importScript_("",'goog.retrieveAndExecModule_("'+a+'");')&&(goog.dependencies_.written[a]=!0)},goog.queuedModules_=[],goog.retrieveAndExecModule_=function(a){for(var b;-1!=(b=a.indexOf("/./"));)a=
a.substr(0,b)+a.substr(b+2);for(;-1!=(b=a.indexOf("/../"));){var c=a.lastIndexOf("/",b-1);a=a.substr(0,c)+a.substr(b+3)}b=goog.global.CLOSURE_IMPORT_SCRIPT||goog.writeScriptTag_;var d=null,c=new goog.global.XMLHttpRequest;c.onload=function(){d=this.responseText};c.open("get",a,!1);c.send();d=c.responseText;if(null!=d)c=goog.wrapModule_(a,d),goog.IS_OLD_IE_?goog.queuedModules_.push(c):b(a,c),goog.dependencies_.written[a]=!0;else throw Error("load of "+a+"failed");},goog.wrapModule_=function(a,b){return goog.LOAD_MODULE_USING_EVAL&&
goog.isDef(goog.global.JSON)?"goog.loadModule("+goog.global.JSON.stringify(b+"\n//# sourceURL="+a+"\n")+");":'goog.loadModule(function(exports) {"use strict";'+b+"\n;return exports});\n//# sourceURL="+a+"\n"},goog.loadQueuedModules_=function(){var a=goog.queuedModules_.length;if(0<a){var b=goog.queuedModules_;goog.queuedModules_=[];for(var c=0;c<a;c++)goog.globalEval(b[c])}},goog.loadModule=function(a){try{goog.moduleLoaderState_={moduleName:void 0,declareTestMethods:!1};var b;if(goog.isFunction(a))b=
a.call(goog.global,{});else if(goog.isString(a))b=goog.loadModuleFromSource_.call(goog.global,a);else throw Error("Invalid module definition");var c=goog.moduleLoaderState_.moduleName;if(!goog.isString(c)||!c)throw Error('Invalid module name "'+c+'"');goog.moduleLoaderState_.declareLegacyNamespace?goog.constructNamespace_(c,b):goog.SEAL_MODULE_EXPORTS&&Object.seal&&Object.seal(b);goog.loadedModules_[c]=b;if(goog.moduleLoaderState_.declareTestMethods)for(var d in b)if(0===d.indexOf("test",0)||"tearDown"==
d||"setUp"==d||"setUpPage"==d||"tearDownPage"==d)goog.global[d]=b[d]}finally{goog.moduleLoaderState_=null}},goog.loadModuleFromSource_=function(a){eval(a);return{}},goog.writeScriptTag_=function(a,b){if(goog.inHtmlDocument_()){var c=goog.global.document;if("complete"==c.readyState){if(/\bdeps.js$/.test(a))return!1;throw Error('Cannot write "'+a+'" after document load');}var d=goog.IS_OLD_IE_;void 0===b?d?(d=" onreadystatechange='goog.onScriptLoad_(this, "+ ++goog.lastNonModuleScriptIndex_+")' ",c.write('<script type="text/javascript" src="'+
a+'"'+d+">\x3c/script>")):c.write('<script type="text/javascript" src="'+a+'">\x3c/script>'):c.write('<script type="text/javascript">'+b+"\x3c/script>");return!0}return!1},goog.lastNonModuleScriptIndex_=0,goog.onScriptLoad_=function(a,b){"complete"==a.readyState&&goog.lastNonModuleScriptIndex_==b&&goog.loadQueuedModules_();return!0},goog.writeScripts_=function(){function a(e){if(!(e in d.written)){if(!(e in d.visited)&&(d.visited[e]=!0,e in d.requires))for(var f in d.requires[e])if(!goog.isProvided_(f))if(f in
d.nameToPath)a(d.nameToPath[f]);else throw Error("Undefined nameToPath for "+f);e in c||(c[e]=!0,b.push(e))}}var b=[],c={},d=goog.dependencies_,e;for(e in goog.included_)d.written[e]||a(e);for(var f=0;f<b.length;f++)e=b[f],goog.dependencies_.written[e]=!0;var g=goog.moduleLoaderState_;goog.moduleLoaderState_=null;for(f=0;f<b.length;f++)if(e=b[f])d.pathIsModule[e]?goog.importModule_(goog.basePath+e):goog.importScript_(goog.basePath+e);else throw goog.moduleLoaderState_=g,Error("Undefined script input");
goog.moduleLoaderState_=g},goog.getPathFromDeps_=function(a){return a in goog.dependencies_.nameToPath?goog.dependencies_.nameToPath[a]:null},goog.findBasePath_(),goog.global.CLOSURE_NO_DEPS||goog.importScript_(goog.basePath+"deps.js"));
goog.typeOf=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b};goog.isNull=function(a){return null===a};goog.isDefAndNotNull=function(a){return null!=a};goog.isArray=function(a){return"array"==goog.typeOf(a)};goog.isArrayLike=function(a){var b=goog.typeOf(a);return"array"==b||"object"==b&&"number"==typeof a.length};goog.isDateLike=function(a){return goog.isObject(a)&&"function"==typeof a.getFullYear};goog.isString=function(a){return"string"==typeof a};
goog.isBoolean=function(a){return"boolean"==typeof a};goog.isNumber=function(a){return"number"==typeof a};goog.isFunction=function(a){return"function"==goog.typeOf(a)};goog.isObject=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b};goog.getUid=function(a){return a[goog.UID_PROPERTY_]||(a[goog.UID_PROPERTY_]=++goog.uidCounter_)};goog.hasUid=function(a){return!!a[goog.UID_PROPERTY_]};goog.removeUid=function(a){"removeAttribute"in a&&a.removeAttribute(goog.UID_PROPERTY_);try{delete a[goog.UID_PROPERTY_]}catch(b){}};
goog.UID_PROPERTY_="closure_uid_"+(1E9*Math.random()>>>0);goog.uidCounter_=0;goog.getHashCode=goog.getUid;goog.removeHashCode=goog.removeUid;goog.cloneObject=function(a){var b=goog.typeOf(a);if("object"==b||"array"==b){if(a.clone)return a.clone();var b="array"==b?[]:{},c;for(c in a)b[c]=goog.cloneObject(a[c]);return b}return a};goog.bindNative_=function(a,b,c){return a.call.apply(a.bind,arguments)};
goog.bindJs_=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}};goog.bind=function(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?goog.bind=goog.bindNative_:goog.bind=goog.bindJs_;return goog.bind.apply(null,arguments)};
goog.partial=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}};goog.mixin=function(a,b){for(var c in b)a[c]=b[c]};goog.now=goog.TRUSTED_SITE&&Date.now||function(){return+new Date};
goog.globalEval=function(a){if(goog.global.execScript)goog.global.execScript(a,"JavaScript");else if(goog.global.eval)if(null==goog.evalWorksForGlobals_&&(goog.global.eval("var _et_ = 1;"),"undefined"!=typeof goog.global._et_?(delete goog.global._et_,goog.evalWorksForGlobals_=!0):goog.evalWorksForGlobals_=!1),goog.evalWorksForGlobals_)goog.global.eval(a);else{var b=goog.global.document,c=b.createElement("script");c.type="text/javascript";c.defer=!1;c.appendChild(b.createTextNode(a));b.body.appendChild(c);
b.body.removeChild(c)}else throw Error("goog.globalEval not available");};goog.evalWorksForGlobals_=null;goog.getCssName=function(a,b){var c=function(a){return goog.cssNameMapping_[a]||a},d=function(a){a=a.split("-");for(var b=[],d=0;d<a.length;d++)b.push(c(a[d]));return b.join("-")},d=goog.cssNameMapping_?"BY_WHOLE"==goog.cssNameMappingStyle_?c:d:function(a){return a};return b?a+"-"+d(b):d(a)};goog.setCssNameMapping=function(a,b){goog.cssNameMapping_=a;goog.cssNameMappingStyle_=b};
!COMPILED&&goog.global.CLOSURE_CSS_NAME_MAPPING&&(goog.cssNameMapping_=goog.global.CLOSURE_CSS_NAME_MAPPING);goog.getMsg=function(a,b){b&&(a=a.replace(/\{\$([^}]+)}/g,function(a,d){return d in b?b[d]:a}));return a};goog.getMsgWithFallback=function(a,b){return a};goog.exportSymbol=function(a,b,c){goog.exportPath_(a,b,c)};goog.exportProperty=function(a,b,c){a[b]=c};
goog.inherits=function(a,b){function c(){}c.prototype=b.prototype;a.superClass_=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.base=function(a,c,f){var g=Array.prototype.slice.call(arguments,2);return b.prototype[c].apply(a,g)}};
goog.base=function(a,b,c){var d=arguments.callee.caller;if(goog.STRICT_MODE_COMPATIBLE||goog.DEBUG&&!d)throw Error("arguments.caller not defined.  goog.base() cannot be used with strict mode code. See http://www.ecma-international.org/ecma-262/5.1/#sec-C");if(d.superClass_)return d.superClass_.constructor.apply(a,Array.prototype.slice.call(arguments,1));for(var e=Array.prototype.slice.call(arguments,2),f=!1,g=a.constructor;g;g=g.superClass_&&g.superClass_.constructor)if(g.prototype[b]===d)f=!0;else if(f)return g.prototype[b].apply(a,
e);if(a[b]===d)return a.constructor.prototype[b].apply(a,e);throw Error("goog.base called from a method of one name to a method of a different name");};goog.scope=function(a){a.call(goog.global)};COMPILED||(goog.global.COMPILED=COMPILED);
goog.defineClass=function(a,b){var c=b.constructor,d=b.statics;c&&c!=Object.prototype.constructor||(c=function(){throw Error("cannot instantiate an interface (no constructor defined).");});c=goog.defineClass.createSealingConstructor_(c,a);a&&goog.inherits(c,a);delete b.constructor;delete b.statics;goog.defineClass.applyProperties_(c.prototype,b);null!=d&&(d instanceof Function?d(c):goog.defineClass.applyProperties_(c,d));return c};goog.defineClass.SEAL_CLASS_INSTANCES=goog.DEBUG;
goog.defineClass.createSealingConstructor_=function(a,b){if(goog.defineClass.SEAL_CLASS_INSTANCES&&Object.seal instanceof Function){if(b&&b.prototype&&b.prototype[goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_])return a;var c=function(){var b=a.apply(this,arguments)||this;b[goog.UID_PROPERTY_]=b[goog.UID_PROPERTY_];this.constructor===c&&Object.seal(b);return b};return c}return a};goog.defineClass.OBJECT_PROTOTYPE_FIELDS_="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
goog.defineClass.applyProperties_=function(a,b){for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&(a[c]=b[c]);for(var d=0;d<goog.defineClass.OBJECT_PROTOTYPE_FIELDS_.length;d++)c=goog.defineClass.OBJECT_PROTOTYPE_FIELDS_[d],Object.prototype.hasOwnProperty.call(b,c)&&(a[c]=b[c])};goog.tagUnsealableClass=function(a){!COMPILED&&goog.defineClass.SEAL_CLASS_INSTANCES&&(a.prototype[goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_]=!0)};goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_="goog_defineClass_legacy_unsealable";/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
var lf={schema:{}};lf.schema.Column=function(){};lf.schema.Database=function(){};lf.schema.Index=function(a,b,c,d,e){this.tableName=a;this.name=b;this.isUnique=c;this.persistent=d;this.columnNames=e};lf.schema.Index.prototype.getNormalizedName=function(){return this.tableName+"."+this.name};lf.schema.Table=function(){};/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
lf.Row=function(a,b){this.id_=a;this.payload_=b||this.defaultPayload()};lf.Row.nextId_=0;lf.Row.DUMMY_ID=-1;lf.Row.getNextId=function(){return lf.Row.nextId_++};lf.Row.setNextId=function(a){lf.Row.nextId_=a};lf.Row.prototype.id=function(){return this.id_};lf.Row.prototype.assignRowId=function(a){this.id_=a};lf.Row.prototype.payload=function(){return this.payload_};lf.Row.prototype.defaultPayload=function(){return{}};lf.Row.prototype.toDbPayload=function(){return this.payload_};
lf.Row.prototype.serialize=function(){return{id:this.id_,value:this.toDbPayload()}};lf.Row.prototype.keyOfIndex=function(a){return"##row_id##"==a?this.id_:null};lf.Row.deserialize=function(a){return new lf.Row(a.id,a.value)};lf.Row.create=function(a){return new lf.Row(lf.Row.getNextId(),a||{})};lf.Row.binToHex=function(a){if(!goog.isDefAndNotNull(a))return"";a=new Uint8Array(a);for(var b="",c=0;c<a.length;++c)var d=a[c].toString(16),b=b+(2>d.length?"0"+d:d);return b};
lf.Row.hexToBin=function(a){if(""==a)return null;0!=a.length%2&&(a="0"+a);for(var b=new ArrayBuffer(a.length/2),c=new Uint8Array(b),d=0,e=0;d<a.length;d+=2)c[e++]=parseInt(a.substr(d,2),16);return b};/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
lf.schema.Constraint=function(a,b,c,d){this.primaryKey_=a;this.notNullable_=b;this.foreignKeys_=c;this.unique_=d};lf.schema.Constraint.prototype.getPrimaryKey=function(){return this.primaryKey_};lf.schema.Constraint.prototype.getNotNullable=function(){return this.notNullable_};lf.schema.Constraint.prototype.getForeignKeys=function(){return this.foreignKeys_};lf.schema.Constraint.prototype.getUnique=function(){return this.unique_};/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
lf.Type={ARRAY_BUFFER:0,BOOLEAN:1,DATE_TIME:2,INTEGER:3,NUMBER:4,STRING:5};goog.dom={};goog.dom.NodeType={ELEMENT:1,ATTRIBUTE:2,TEXT:3,CDATA_SECTION:4,ENTITY_REFERENCE:5,ENTITY:6,PROCESSING_INSTRUCTION:7,COMMENT:8,DOCUMENT:9,DOCUMENT_TYPE:10,DOCUMENT_FRAGMENT:11,NOTATION:12};goog.debug={};goog.debug.Error=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,goog.debug.Error);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))};goog.inherits(goog.debug.Error,Error);goog.debug.Error.prototype.name="CustomError";goog.string={};goog.string.DETECT_DOUBLE_ESCAPING=!1;goog.string.Unicode={NBSP:"\u00a0"};goog.string.startsWith=function(a,b){return 0==a.lastIndexOf(b,0)};goog.string.endsWith=function(a,b){var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c};goog.string.caseInsensitiveStartsWith=function(a,b){return 0==goog.string.caseInsensitiveCompare(b,a.substr(0,b.length))};goog.string.caseInsensitiveEndsWith=function(a,b){return 0==goog.string.caseInsensitiveCompare(b,a.substr(a.length-b.length,b.length))};
goog.string.caseInsensitiveEquals=function(a,b){return a.toLowerCase()==b.toLowerCase()};goog.string.subs=function(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s")};goog.string.collapseWhitespace=function(a){return a.replace(/[\s\xa0]+/g," ").replace(/^\s+|\s+$/g,"")};goog.string.isEmptyOrWhitespace=function(a){return/^[\s\xa0]*$/.test(a)};goog.string.isEmptyString=function(a){return 0==a.length};
goog.string.isEmpty=goog.string.isEmptyOrWhitespace;goog.string.isEmptyOrWhitespaceSafe=function(a){return goog.string.isEmptyOrWhitespace(goog.string.makeSafe(a))};goog.string.isEmptySafe=goog.string.isEmptyOrWhitespaceSafe;goog.string.isBreakingWhitespace=function(a){return!/[^\t\n\r ]/.test(a)};goog.string.isAlpha=function(a){return!/[^a-zA-Z]/.test(a)};goog.string.isNumeric=function(a){return!/[^0-9]/.test(a)};goog.string.isAlphaNumeric=function(a){return!/[^a-zA-Z0-9]/.test(a)};
goog.string.isSpace=function(a){return" "==a};goog.string.isUnicodeChar=function(a){return 1==a.length&&" "<=a&&"~">=a||"\u0080"<=a&&"\ufffd">=a};goog.string.stripNewlines=function(a){return a.replace(/(\r\n|\r|\n)+/g," ")};goog.string.canonicalizeNewlines=function(a){return a.replace(/(\r\n|\r|\n)/g,"\n")};goog.string.normalizeWhitespace=function(a){return a.replace(/\xa0|\s/g," ")};goog.string.normalizeSpaces=function(a){return a.replace(/\xa0|[ \t]+/g," ")};
goog.string.collapseBreakingSpaces=function(a){return a.replace(/[\t\r\n ]+/g," ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g,"")};goog.string.trim=goog.TRUSTED_SITE&&String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};goog.string.trimLeft=function(a){return a.replace(/^[\s\xa0]+/,"")};goog.string.trimRight=function(a){return a.replace(/[\s\xa0]+$/,"")};
goog.string.caseInsensitiveCompare=function(a,b){var c=String(a).toLowerCase(),d=String(b).toLowerCase();return c<d?-1:c==d?0:1};goog.string.numerateCompareRegExp_=/(\.\d+)|(\d+)|(\D+)/g;
goog.string.numerateCompare=function(a,b){if(a==b)return 0;if(!a)return-1;if(!b)return 1;for(var c=a.toLowerCase().match(goog.string.numerateCompareRegExp_),d=b.toLowerCase().match(goog.string.numerateCompareRegExp_),e=Math.min(c.length,d.length),f=0;f<e;f++){var g=c[f],h=d[f];if(g!=h)return c=parseInt(g,10),!isNaN(c)&&(d=parseInt(h,10),!isNaN(d)&&c-d)?c-d:g<h?-1:1}return c.length!=d.length?c.length-d.length:a<b?-1:1};goog.string.urlEncode=function(a){return encodeURIComponent(String(a))};
goog.string.urlDecode=function(a){return decodeURIComponent(a.replace(/\+/g," "))};goog.string.newLineToBr=function(a,b){return a.replace(/(\r\n|\r|\n)/g,b?"<br />":"<br>")};
goog.string.htmlEscape=function(a,b){if(b)a=a.replace(goog.string.AMP_RE_,"&amp;").replace(goog.string.LT_RE_,"&lt;").replace(goog.string.GT_RE_,"&gt;").replace(goog.string.QUOT_RE_,"&quot;").replace(goog.string.SINGLE_QUOTE_RE_,"&#39;").replace(goog.string.NULL_RE_,"&#0;"),goog.string.DETECT_DOUBLE_ESCAPING&&(a=a.replace(goog.string.E_RE_,"&#101;"));else{if(!goog.string.ALL_RE_.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(goog.string.AMP_RE_,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(goog.string.LT_RE_,
"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(goog.string.GT_RE_,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(goog.string.QUOT_RE_,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(goog.string.SINGLE_QUOTE_RE_,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(goog.string.NULL_RE_,"&#0;"));goog.string.DETECT_DOUBLE_ESCAPING&&-1!=a.indexOf("e")&&(a=a.replace(goog.string.E_RE_,"&#101;"))}return a};goog.string.AMP_RE_=/&/g;goog.string.LT_RE_=/</g;goog.string.GT_RE_=/>/g;goog.string.QUOT_RE_=/"/g;
goog.string.SINGLE_QUOTE_RE_=/'/g;goog.string.NULL_RE_=/\x00/g;goog.string.E_RE_=/e/g;goog.string.ALL_RE_=goog.string.DETECT_DOUBLE_ESCAPING?/[\x00&<>"'e]/:/[\x00&<>"']/;goog.string.unescapeEntities=function(a){return goog.string.contains(a,"&")?"document"in goog.global?goog.string.unescapeEntitiesUsingDom_(a):goog.string.unescapePureXmlEntities_(a):a};goog.string.unescapeEntitiesWithDocument=function(a,b){return goog.string.contains(a,"&")?goog.string.unescapeEntitiesUsingDom_(a,b):a};
goog.string.unescapeEntitiesUsingDom_=function(a,b){var c={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"'},d;d=b?b.createElement("div"):goog.global.document.createElement("div");return a.replace(goog.string.HTML_ENTITY_PATTERN_,function(a,b){var g=c[a];if(g)return g;if("#"==b.charAt(0)){var h=Number("0"+b.substr(1));isNaN(h)||(g=String.fromCharCode(h))}g||(d.innerHTML=a+" ",g=d.firstChild.nodeValue.slice(0,-1));return c[a]=g})};
goog.string.unescapePureXmlEntities_=function(a){return a.replace(/&([^;]+);/g,function(a,c){switch(c){case "amp":return"&";case "lt":return"<";case "gt":return">";case "quot":return'"';default:if("#"==c.charAt(0)){var d=Number("0"+c.substr(1));if(!isNaN(d))return String.fromCharCode(d)}return a}})};goog.string.HTML_ENTITY_PATTERN_=/&([^;\s<&]+);?/g;goog.string.whitespaceEscape=function(a,b){return goog.string.newLineToBr(a.replace(/  /g," &#160;"),b)};
goog.string.preserveSpaces=function(a){return a.replace(/(^|[\n ]) /g,"$1"+goog.string.Unicode.NBSP)};goog.string.stripQuotes=function(a,b){for(var c=b.length,d=0;d<c;d++){var e=1==c?b:b.charAt(d);if(a.charAt(0)==e&&a.charAt(a.length-1)==e)return a.substring(1,a.length-1)}return a};goog.string.truncate=function(a,b,c){c&&(a=goog.string.unescapeEntities(a));a.length>b&&(a=a.substring(0,b-3)+"...");c&&(a=goog.string.htmlEscape(a));return a};
goog.string.truncateMiddle=function(a,b,c,d){c&&(a=goog.string.unescapeEntities(a));if(d&&a.length>b){d>b&&(d=b);var e=a.length-d;a=a.substring(0,b-d)+"..."+a.substring(e)}else a.length>b&&(d=Math.floor(b/2),e=a.length-d,a=a.substring(0,d+b%2)+"..."+a.substring(e));c&&(a=goog.string.htmlEscape(a));return a};goog.string.specialEscapeChars_={"\x00":"\\0","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\"};goog.string.jsEscapeCache_={"'":"\\'"};
goog.string.quote=function(a){a=String(a);if(a.quote)return a.quote();for(var b=['"'],c=0;c<a.length;c++){var d=a.charAt(c),e=d.charCodeAt(0);b[c+1]=goog.string.specialEscapeChars_[d]||(31<e&&127>e?d:goog.string.escapeChar(d))}b.push('"');return b.join("")};goog.string.escapeString=function(a){for(var b=[],c=0;c<a.length;c++)b[c]=goog.string.escapeChar(a.charAt(c));return b.join("")};
goog.string.escapeChar=function(a){if(a in goog.string.jsEscapeCache_)return goog.string.jsEscapeCache_[a];if(a in goog.string.specialEscapeChars_)return goog.string.jsEscapeCache_[a]=goog.string.specialEscapeChars_[a];var b=a,c=a.charCodeAt(0);if(31<c&&127>c)b=a;else{if(256>c){if(b="\\x",16>c||256<c)b+="0"}else b="\\u",4096>c&&(b+="0");b+=c.toString(16).toUpperCase()}return goog.string.jsEscapeCache_[a]=b};goog.string.contains=function(a,b){return-1!=a.indexOf(b)};
goog.string.caseInsensitiveContains=function(a,b){return goog.string.contains(a.toLowerCase(),b.toLowerCase())};goog.string.countOf=function(a,b){return a&&b?a.split(b).length-1:0};goog.string.removeAt=function(a,b,c){var d=a;0<=b&&b<a.length&&0<c&&(d=a.substr(0,b)+a.substr(b+c,a.length-b-c));return d};goog.string.remove=function(a,b){var c=new RegExp(goog.string.regExpEscape(b),"");return a.replace(c,"")};
goog.string.removeAll=function(a,b){var c=new RegExp(goog.string.regExpEscape(b),"g");return a.replace(c,"")};goog.string.regExpEscape=function(a){return String(a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08")};goog.string.repeat=function(a,b){return Array(b+1).join(a)};goog.string.padNumber=function(a,b,c){a=goog.isDef(c)?a.toFixed(c):String(a);c=a.indexOf(".");-1==c&&(c=a.length);return goog.string.repeat("0",Math.max(0,b-c))+a};
goog.string.makeSafe=function(a){return null==a?"":String(a)};goog.string.buildString=function(a){return Array.prototype.join.call(arguments,"")};goog.string.getRandomString=function(){return Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^goog.now()).toString(36)};
goog.string.compareVersions=function(a,b){for(var c=0,d=goog.string.trim(String(a)).split("."),e=goog.string.trim(String(b)).split("."),f=Math.max(d.length,e.length),g=0;0==c&&g<f;g++){var h=d[g]||"",k=e[g]||"",l=/(\d*)(\D*)/g,n=/(\d*)(\D*)/g;do{var m=l.exec(h)||["","",""],p=n.exec(k)||["","",""];if(0==m[0].length&&0==p[0].length)break;var c=0==m[1].length?0:parseInt(m[1],10),q=0==p[1].length?0:parseInt(p[1],10),c=goog.string.compareElements_(c,q)||goog.string.compareElements_(0==m[2].length,0==p[2].length)||
goog.string.compareElements_(m[2],p[2])}while(0==c)}return c};goog.string.compareElements_=function(a,b){return a<b?-1:a>b?1:0};goog.string.HASHCODE_MAX_=4294967296;goog.string.hashCode=function(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c),b%=goog.string.HASHCODE_MAX_;return b};goog.string.uniqueStringCounter_=2147483648*Math.random()|0;goog.string.createUniqueString=function(){return"goog_"+goog.string.uniqueStringCounter_++};
goog.string.toNumber=function(a){var b=Number(a);return 0==b&&goog.string.isEmpty(a)?NaN:b};goog.string.isLowerCamelCase=function(a){return/^[a-z]+([A-Z][a-z]*)*$/.test(a)};goog.string.isUpperCamelCase=function(a){return/^([A-Z][a-z]*)+$/.test(a)};goog.string.toCamelCase=function(a){return String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()})};goog.string.toSelectorCase=function(a){return String(a).replace(/([A-Z])/g,"-$1").toLowerCase()};
goog.string.toTitleCase=function(a,b){var c=goog.isString(b)?goog.string.regExpEscape(b):"\\s";return a.replace(new RegExp("(^"+(c?"|["+c+"]+":"")+")([a-z])","g"),function(a,b,c){return b+c.toUpperCase()})};goog.string.parseInt=function(a){isFinite(a)&&(a=String(a));return goog.isString(a)?/^\s*-?0x/i.test(a)?parseInt(a,16):parseInt(a,10):NaN};goog.string.splitLimit=function(a,b,c){a=a.split(b);for(var d=[];0<c&&a.length;)d.push(a.shift()),c--;a.length&&d.push(a.join(b));return d};goog.asserts={};goog.asserts.ENABLE_ASSERTS=goog.DEBUG;goog.asserts.AssertionError=function(a,b){b.unshift(a);goog.debug.Error.call(this,goog.string.subs.apply(null,b));b.shift();this.messagePattern=a};goog.inherits(goog.asserts.AssertionError,goog.debug.Error);goog.asserts.AssertionError.prototype.name="AssertionError";goog.asserts.DEFAULT_ERROR_HANDLER=function(a){throw a;};goog.asserts.errorHandler_=goog.asserts.DEFAULT_ERROR_HANDLER;
goog.asserts.doAssertFailure_=function(a,b,c,d){var e="Assertion failed";if(c)var e=e+(": "+c),f=d;else a&&(e+=": "+a,f=b);a=new goog.asserts.AssertionError(""+e,f||[]);goog.asserts.errorHandler_(a)};goog.asserts.setErrorHandler=function(a){goog.asserts.ENABLE_ASSERTS&&(goog.asserts.errorHandler_=a)};goog.asserts.assert=function(a,b,c){goog.asserts.ENABLE_ASSERTS&&!a&&goog.asserts.doAssertFailure_("",null,b,Array.prototype.slice.call(arguments,2));return a};
goog.asserts.fail=function(a,b){goog.asserts.ENABLE_ASSERTS&&goog.asserts.errorHandler_(new goog.asserts.AssertionError("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1)))};goog.asserts.assertNumber=function(a,b,c){goog.asserts.ENABLE_ASSERTS&&!goog.isNumber(a)&&goog.asserts.doAssertFailure_("Expected number but got %s: %s.",[goog.typeOf(a),a],b,Array.prototype.slice.call(arguments,2));return a};
goog.asserts.assertString=function(a,b,c){goog.asserts.ENABLE_ASSERTS&&!goog.isString(a)&&goog.asserts.doAssertFailure_("Expected string but got %s: %s.",[goog.typeOf(a),a],b,Array.prototype.slice.call(arguments,2));return a};goog.asserts.assertFunction=function(a,b,c){goog.asserts.ENABLE_ASSERTS&&!goog.isFunction(a)&&goog.asserts.doAssertFailure_("Expected function but got %s: %s.",[goog.typeOf(a),a],b,Array.prototype.slice.call(arguments,2));return a};
goog.asserts.assertObject=function(a,b,c){goog.asserts.ENABLE_ASSERTS&&!goog.isObject(a)&&goog.asserts.doAssertFailure_("Expected object but got %s: %s.",[goog.typeOf(a),a],b,Array.prototype.slice.call(arguments,2));return a};goog.asserts.assertArray=function(a,b,c){goog.asserts.ENABLE_ASSERTS&&!goog.isArray(a)&&goog.asserts.doAssertFailure_("Expected array but got %s: %s.",[goog.typeOf(a),a],b,Array.prototype.slice.call(arguments,2));return a};
goog.asserts.assertBoolean=function(a,b,c){goog.asserts.ENABLE_ASSERTS&&!goog.isBoolean(a)&&goog.asserts.doAssertFailure_("Expected boolean but got %s: %s.",[goog.typeOf(a),a],b,Array.prototype.slice.call(arguments,2));return a};goog.asserts.assertElement=function(a,b,c){!goog.asserts.ENABLE_ASSERTS||goog.isObject(a)&&a.nodeType==goog.dom.NodeType.ELEMENT||goog.asserts.doAssertFailure_("Expected Element but got %s: %s.",[goog.typeOf(a),a],b,Array.prototype.slice.call(arguments,2));return a};
goog.asserts.assertInstanceof=function(a,b,c,d){!goog.asserts.ENABLE_ASSERTS||a instanceof b||goog.asserts.doAssertFailure_("Expected instanceof %s but got %s.",[goog.asserts.getType_(b),goog.asserts.getType_(a)],c,Array.prototype.slice.call(arguments,3));return a};goog.asserts.assertObjectPrototypeIsIntact=function(){for(var a in Object.prototype)goog.asserts.fail(a+" should not be enumerable in Object.prototype.")};
goog.asserts.getType_=function(a){return a instanceof Function?a.displayName||a.name||"unknown type name":a instanceof Object?a.constructor.displayName||a.constructor.name||Object.prototype.toString.call(a):null===a?"null":typeof a};goog.object={};goog.object.forEach=function(a,b,c){for(var d in a)b.call(c,a[d],d,a)};goog.object.filter=function(a,b,c){var d={},e;for(e in a)b.call(c,a[e],e,a)&&(d[e]=a[e]);return d};goog.object.map=function(a,b,c){var d={},e;for(e in a)d[e]=b.call(c,a[e],e,a);return d};goog.object.some=function(a,b,c){for(var d in a)if(b.call(c,a[d],d,a))return!0;return!1};goog.object.every=function(a,b,c){for(var d in a)if(!b.call(c,a[d],d,a))return!1;return!0};
goog.object.getCount=function(a){var b=0,c;for(c in a)b++;return b};goog.object.getAnyKey=function(a){for(var b in a)return b};goog.object.getAnyValue=function(a){for(var b in a)return a[b]};goog.object.contains=function(a,b){return goog.object.containsValue(a,b)};goog.object.getValues=function(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b};goog.object.getKeys=function(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b};
goog.object.getValueByKeys=function(a,b){for(var c=goog.isArrayLike(b),d=c?b:arguments,c=c?0:1;c<d.length&&(a=a[d[c]],goog.isDef(a));c++);return a};goog.object.containsKey=function(a,b){return b in a};goog.object.containsValue=function(a,b){for(var c in a)if(a[c]==b)return!0;return!1};goog.object.findKey=function(a,b,c){for(var d in a)if(b.call(c,a[d],d,a))return d};goog.object.findValue=function(a,b,c){return(b=goog.object.findKey(a,b,c))&&a[b]};
goog.object.isEmpty=function(a){for(var b in a)return!1;return!0};goog.object.clear=function(a){for(var b in a)delete a[b]};goog.object.remove=function(a,b){var c;(c=b in a)&&delete a[b];return c};goog.object.add=function(a,b,c){if(b in a)throw Error('The object already contains the key "'+b+'"');goog.object.set(a,b,c)};goog.object.get=function(a,b,c){return b in a?a[b]:c};goog.object.set=function(a,b,c){a[b]=c};goog.object.setIfUndefined=function(a,b,c){return b in a?a[b]:a[b]=c};
goog.object.equals=function(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(c in b)if(!(c in a))return!1;return!0};goog.object.clone=function(a){var b={},c;for(c in a)b[c]=a[c];return b};goog.object.unsafeClone=function(a){var b=goog.typeOf(a);if("object"==b||"array"==b){if(a.clone)return a.clone();var b="array"==b?[]:{},c;for(c in a)b[c]=goog.object.unsafeClone(a[c]);return b}return a};goog.object.transpose=function(a){var b={},c;for(c in a)b[a[c]]=c;return b};
goog.object.PROTOTYPE_FIELDS_="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");goog.object.extend=function(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<goog.object.PROTOTYPE_FIELDS_.length;f++)c=goog.object.PROTOTYPE_FIELDS_[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};
goog.object.create=function(a){var b=arguments.length;if(1==b&&goog.isArray(arguments[0]))return goog.object.create.apply(null,arguments[0]);if(b%2)throw Error("Uneven number of arguments");for(var c={},d=0;d<b;d+=2)c[arguments[d]]=arguments[d+1];return c};goog.object.createSet=function(a){var b=arguments.length;if(1==b&&goog.isArray(arguments[0]))return goog.object.createSet.apply(null,arguments[0]);for(var c={},d=0;d<b;d++)c[arguments[d]]=!0;return c};
goog.object.createImmutableView=function(a){var b=a;Object.isFrozen&&!Object.isFrozen(a)&&(b=Object.create(a),Object.freeze(b));return b};goog.object.isImmutableView=function(a){return!!Object.isFrozen&&Object.isFrozen(a)};goog.functions={};goog.functions.constant=function(a){return function(){return a}};goog.functions.FALSE=goog.functions.constant(!1);goog.functions.TRUE=goog.functions.constant(!0);goog.functions.NULL=goog.functions.constant(null);goog.functions.identity=function(a,b){return a};goog.functions.error=function(a){return function(){throw Error(a);}};goog.functions.fail=function(a){return function(){throw a;}};
goog.functions.lock=function(a,b){b=b||0;return function(){return a.apply(this,Array.prototype.slice.call(arguments,0,b))}};goog.functions.nth=function(a){return function(){return arguments[a]}};goog.functions.withReturnValue=function(a,b){return goog.functions.sequence(a,goog.functions.constant(b))};goog.functions.equalTo=function(a,b){return function(c){return b?a==c:a===c}};
goog.functions.compose=function(a,b){var c=arguments,d=c.length;return function(){var a;d&&(a=c[d-1].apply(this,arguments));for(var b=d-2;0<=b;b--)a=c[b].call(this,a);return a}};goog.functions.sequence=function(a){var b=arguments,c=b.length;return function(){for(var a,e=0;e<c;e++)a=b[e].apply(this,arguments);return a}};goog.functions.and=function(a){var b=arguments,c=b.length;return function(){for(var a=0;a<c;a++)if(!b[a].apply(this,arguments))return!1;return!0}};
goog.functions.or=function(a){var b=arguments,c=b.length;return function(){for(var a=0;a<c;a++)if(b[a].apply(this,arguments))return!0;return!1}};goog.functions.not=function(a){return function(){return!a.apply(this,arguments)}};goog.functions.create=function(a,b){var c=function(){};c.prototype=a.prototype;c=new c;a.apply(c,Array.prototype.slice.call(arguments,1));return c};goog.functions.CACHE_RETURN_VALUE=!0;
goog.functions.cacheReturnValue=function(a){var b=!1,c;return function(){if(!goog.functions.CACHE_RETURN_VALUE)return a();b||(c=a(),b=!0);return c}};goog.array={};goog.NATIVE_ARRAY_PROTOTYPES=goog.TRUSTED_SITE;goog.array.ASSUME_NATIVE_FUNCTIONS=!1;goog.array.peek=function(a){return a[a.length-1]};goog.array.last=goog.array.peek;goog.array.ARRAY_PROTOTYPE_=Array.prototype;
goog.array.indexOf=goog.NATIVE_ARRAY_PROTOTYPES&&(goog.array.ASSUME_NATIVE_FUNCTIONS||goog.array.ARRAY_PROTOTYPE_.indexOf)?function(a,b,c){goog.asserts.assert(null!=a.length);return goog.array.ARRAY_PROTOTYPE_.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(goog.isString(a))return goog.isString(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1};
goog.array.lastIndexOf=goog.NATIVE_ARRAY_PROTOTYPES&&(goog.array.ASSUME_NATIVE_FUNCTIONS||goog.array.ARRAY_PROTOTYPE_.lastIndexOf)?function(a,b,c){goog.asserts.assert(null!=a.length);return goog.array.ARRAY_PROTOTYPE_.lastIndexOf.call(a,b,null==c?a.length-1:c)}:function(a,b,c){c=null==c?a.length-1:c;0>c&&(c=Math.max(0,a.length+c));if(goog.isString(a))return goog.isString(b)&&1==b.length?a.lastIndexOf(b,c):-1;for(;0<=c;c--)if(c in a&&a[c]===b)return c;return-1};
goog.array.forEach=goog.NATIVE_ARRAY_PROTOTYPES&&(goog.array.ASSUME_NATIVE_FUNCTIONS||goog.array.ARRAY_PROTOTYPE_.forEach)?function(a,b,c){goog.asserts.assert(null!=a.length);goog.array.ARRAY_PROTOTYPE_.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=goog.isString(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)};goog.array.forEachRight=function(a,b,c){for(var d=a.length,e=goog.isString(a)?a.split(""):a,d=d-1;0<=d;--d)d in e&&b.call(c,e[d],d,a)};
goog.array.filter=goog.NATIVE_ARRAY_PROTOTYPES&&(goog.array.ASSUME_NATIVE_FUNCTIONS||goog.array.ARRAY_PROTOTYPE_.filter)?function(a,b,c){goog.asserts.assert(null!=a.length);return goog.array.ARRAY_PROTOTYPE_.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=goog.isString(a)?a.split(""):a,h=0;h<d;h++)if(h in g){var k=g[h];b.call(c,k,h,a)&&(e[f++]=k)}return e};
goog.array.map=goog.NATIVE_ARRAY_PROTOTYPES&&(goog.array.ASSUME_NATIVE_FUNCTIONS||goog.array.ARRAY_PROTOTYPE_.map)?function(a,b,c){goog.asserts.assert(null!=a.length);return goog.array.ARRAY_PROTOTYPE_.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=goog.isString(a)?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));return e};
goog.array.reduce=goog.NATIVE_ARRAY_PROTOTYPES&&(goog.array.ASSUME_NATIVE_FUNCTIONS||goog.array.ARRAY_PROTOTYPE_.reduce)?function(a,b,c,d){goog.asserts.assert(null!=a.length);d&&(b=goog.bind(b,d));return goog.array.ARRAY_PROTOTYPE_.reduce.call(a,b,c)}:function(a,b,c,d){var e=c;goog.array.forEach(a,function(c,g){e=b.call(d,e,c,g,a)});return e};
goog.array.reduceRight=goog.NATIVE_ARRAY_PROTOTYPES&&(goog.array.ASSUME_NATIVE_FUNCTIONS||goog.array.ARRAY_PROTOTYPE_.reduceRight)?function(a,b,c,d){goog.asserts.assert(null!=a.length);d&&(b=goog.bind(b,d));return goog.array.ARRAY_PROTOTYPE_.reduceRight.call(a,b,c)}:function(a,b,c,d){var e=c;goog.array.forEachRight(a,function(c,g){e=b.call(d,e,c,g,a)});return e};
goog.array.some=goog.NATIVE_ARRAY_PROTOTYPES&&(goog.array.ASSUME_NATIVE_FUNCTIONS||goog.array.ARRAY_PROTOTYPE_.some)?function(a,b,c){goog.asserts.assert(null!=a.length);return goog.array.ARRAY_PROTOTYPE_.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=goog.isString(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;return!1};
goog.array.every=goog.NATIVE_ARRAY_PROTOTYPES&&(goog.array.ASSUME_NATIVE_FUNCTIONS||goog.array.ARRAY_PROTOTYPE_.every)?function(a,b,c){goog.asserts.assert(null!=a.length);return goog.array.ARRAY_PROTOTYPE_.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=goog.isString(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&!b.call(c,e[f],f,a))return!1;return!0};goog.array.count=function(a,b,c){var d=0;goog.array.forEach(a,function(a,f,g){b.call(c,a,f,g)&&++d},c);return d};
goog.array.find=function(a,b,c){b=goog.array.findIndex(a,b,c);return 0>b?null:goog.isString(a)?a.charAt(b):a[b]};goog.array.findIndex=function(a,b,c){for(var d=a.length,e=goog.isString(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return f;return-1};goog.array.findRight=function(a,b,c){b=goog.array.findIndexRight(a,b,c);return 0>b?null:goog.isString(a)?a.charAt(b):a[b]};
goog.array.findIndexRight=function(a,b,c){for(var d=a.length,e=goog.isString(a)?a.split(""):a,d=d-1;0<=d;d--)if(d in e&&b.call(c,e[d],d,a))return d;return-1};goog.array.contains=function(a,b){return 0<=goog.array.indexOf(a,b)};goog.array.isEmpty=function(a){return 0==a.length};goog.array.clear=function(a){if(!goog.isArray(a))for(var b=a.length-1;0<=b;b--)delete a[b];a.length=0};goog.array.insert=function(a,b){goog.array.contains(a,b)||a.push(b)};
goog.array.insertAt=function(a,b,c){goog.array.splice(a,c,0,b)};goog.array.insertArrayAt=function(a,b,c){goog.partial(goog.array.splice,a,c,0).apply(null,b)};goog.array.insertBefore=function(a,b,c){var d;2==arguments.length||0>(d=goog.array.indexOf(a,c))?a.push(b):goog.array.insertAt(a,b,d)};goog.array.remove=function(a,b){var c=goog.array.indexOf(a,b),d;(d=0<=c)&&goog.array.removeAt(a,c);return d};
goog.array.removeAt=function(a,b){goog.asserts.assert(null!=a.length);return 1==goog.array.ARRAY_PROTOTYPE_.splice.call(a,b,1).length};goog.array.removeIf=function(a,b,c){b=goog.array.findIndex(a,b,c);return 0<=b?(goog.array.removeAt(a,b),!0):!1};goog.array.removeAllIf=function(a,b,c){var d=0;goog.array.forEachRight(a,function(e,f){b.call(c,e,f,a)&&goog.array.removeAt(a,f)&&d++});return d};goog.array.concat=function(a){return goog.array.ARRAY_PROTOTYPE_.concat.apply(goog.array.ARRAY_PROTOTYPE_,arguments)};
goog.array.join=function(a){return goog.array.ARRAY_PROTOTYPE_.concat.apply(goog.array.ARRAY_PROTOTYPE_,arguments)};goog.array.toArray=function(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};goog.array.clone=goog.array.toArray;
goog.array.extend=function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c],e;if(goog.isArray(d)||(e=goog.isArrayLike(d))&&Object.prototype.hasOwnProperty.call(d,"callee"))a.push.apply(a,d);else if(e)for(var f=a.length,g=d.length,h=0;h<g;h++)a[f+h]=d[h];else a.push(d)}};goog.array.splice=function(a,b,c,d){goog.asserts.assert(null!=a.length);return goog.array.ARRAY_PROTOTYPE_.splice.apply(a,goog.array.slice(arguments,1))};
goog.array.slice=function(a,b,c){goog.asserts.assert(null!=a.length);return 2>=arguments.length?goog.array.ARRAY_PROTOTYPE_.slice.call(a,b):goog.array.ARRAY_PROTOTYPE_.slice.call(a,b,c)};goog.array.removeDuplicates=function(a,b,c){b=b||a;var d=function(a){return goog.isObject(g)?"o"+goog.getUid(g):(typeof g).charAt(0)+g};c=c||d;for(var d={},e=0,f=0;f<a.length;){var g=a[f++],h=c(g);Object.prototype.hasOwnProperty.call(d,h)||(d[h]=!0,b[e++]=g)}b.length=e};
goog.array.binarySearch=function(a,b,c){return goog.array.binarySearch_(a,c||goog.array.defaultCompare,!1,b)};goog.array.binarySelect=function(a,b,c){return goog.array.binarySearch_(a,b,!0,void 0,c)};goog.array.binarySearch_=function(a,b,c,d,e){for(var f=0,g=a.length,h;f<g;){var k=f+g>>1,l;l=c?b.call(e,a[k],k,a):b(d,a[k]);0<l?f=k+1:(g=k,h=!l)}return h?f:~f};goog.array.sort=function(a,b){a.sort(b||goog.array.defaultCompare)};
goog.array.stableSort=function(a,b){for(var c=0;c<a.length;c++)a[c]={index:c,value:a[c]};var d=b||goog.array.defaultCompare;goog.array.sort(a,function(a,b){return d(a.value,b.value)||a.index-b.index});for(c=0;c<a.length;c++)a[c]=a[c].value};goog.array.sortByKey=function(a,b,c){var d=c||goog.array.defaultCompare;goog.array.sort(a,function(a,c){return d(b(a),b(c))})};goog.array.sortObjectsByKey=function(a,b,c){goog.array.sortByKey(a,function(a){return a[b]},c)};
goog.array.isSorted=function(a,b,c){b=b||goog.array.defaultCompare;for(var d=1;d<a.length;d++){var e=b(a[d-1],a[d]);if(0<e||0==e&&c)return!1}return!0};goog.array.equals=function(a,b,c){if(!goog.isArrayLike(a)||!goog.isArrayLike(b)||a.length!=b.length)return!1;var d=a.length;c=c||goog.array.defaultCompareEquality;for(var e=0;e<d;e++)if(!c(a[e],b[e]))return!1;return!0};
goog.array.compare3=function(a,b,c){c=c||goog.array.defaultCompare;for(var d=Math.min(a.length,b.length),e=0;e<d;e++){var f=c(a[e],b[e]);if(0!=f)return f}return goog.array.defaultCompare(a.length,b.length)};goog.array.defaultCompare=function(a,b){return a>b?1:a<b?-1:0};goog.array.defaultCompareEquality=function(a,b){return a===b};goog.array.binaryInsert=function(a,b,c){c=goog.array.binarySearch(a,b,c);return 0>c?(goog.array.insertAt(a,b,-(c+1)),!0):!1};
goog.array.binaryRemove=function(a,b,c){b=goog.array.binarySearch(a,b,c);return 0<=b?goog.array.removeAt(a,b):!1};goog.array.bucket=function(a,b,c){for(var d={},e=0;e<a.length;e++){var f=a[e],g=b.call(c,f,e,a);goog.isDef(g)&&(d[g]||(d[g]=[])).push(f)}return d};goog.array.toObject=function(a,b,c){var d={};goog.array.forEach(a,function(e,f){d[b.call(c,e,f,a)]=e});return d};
goog.array.range=function(a,b,c){var d=[],e=0,f=a;c=c||1;void 0!==b&&(e=a,f=b);if(0>c*(f-e))return[];if(0<c)for(a=e;a<f;a+=c)d.push(a);else for(a=e;a>f;a+=c)d.push(a);return d};goog.array.repeat=function(a,b){for(var c=[],d=0;d<b;d++)c[d]=a;return c};goog.array.flatten=function(a){for(var b=[],c=0;c<arguments.length;c++){var d=arguments[c];if(goog.isArray(d))for(var e=0;e<d.length;e+=8192)for(var f=goog.array.slice(d,e,e+8192),f=goog.array.flatten.apply(null,f),g=0;g<f.length;g++)b.push(f[g]);else b.push(d)}return b};
goog.array.rotate=function(a,b){goog.asserts.assert(null!=a.length);a.length&&(b%=a.length,0<b?goog.array.ARRAY_PROTOTYPE_.unshift.apply(a,a.splice(-b,b)):0>b&&goog.array.ARRAY_PROTOTYPE_.push.apply(a,a.splice(0,-b)));return a};goog.array.moveItem=function(a,b,c){goog.asserts.assert(0<=b&&b<a.length);goog.asserts.assert(0<=c&&c<a.length);b=goog.array.ARRAY_PROTOTYPE_.splice.call(a,b,1);goog.array.ARRAY_PROTOTYPE_.splice.call(a,c,0,b[0])};
goog.array.zip=function(a){if(!arguments.length)return[];for(var b=[],c=0;;c++){for(var d=[],e=0;e<arguments.length;e++){var f=arguments[e];if(c>=f.length)return b;d.push(f[c])}b.push(d)}};goog.array.shuffle=function(a,b){for(var c=b||Math.random,d=a.length-1;0<d;d--){var e=Math.floor(c()*(d+1)),f=a[d];a[d]=a[e];a[e]=f}};goog.math={};goog.math.randomInt=function(a){return Math.floor(Math.random()*a)};goog.math.uniformRandom=function(a,b){return a+Math.random()*(b-a)};goog.math.clamp=function(a,b,c){return Math.min(Math.max(a,b),c)};goog.math.modulo=function(a,b){var c=a%b;return 0>c*b?c+b:c};goog.math.lerp=function(a,b,c){return a+c*(b-a)};goog.math.nearlyEquals=function(a,b,c){return Math.abs(a-b)<=(c||1E-6)};goog.math.standardAngle=function(a){return goog.math.modulo(a,360)};
goog.math.standardAngleInRadians=function(a){return goog.math.modulo(a,2*Math.PI)};goog.math.toRadians=function(a){return a*Math.PI/180};goog.math.toDegrees=function(a){return 180*a/Math.PI};goog.math.angleDx=function(a,b){return b*Math.cos(goog.math.toRadians(a))};goog.math.angleDy=function(a,b){return b*Math.sin(goog.math.toRadians(a))};goog.math.angle=function(a,b,c,d){return goog.math.standardAngle(goog.math.toDegrees(Math.atan2(d-b,c-a)))};
goog.math.angleDifference=function(a,b){var c=goog.math.standardAngle(b)-goog.math.standardAngle(a);180<c?c-=360:-180>=c&&(c=360+c);return c};goog.math.sign=function(a){return 0==a?0:0>a?-1:1};
goog.math.longestCommonSubsequence=function(a,b,c,d){c=c||function(a,b){return a==b};d=d||function(b,c){return a[b]};for(var e=a.length,f=b.length,g=[],h=0;h<e+1;h++)g[h]=[],g[h][0]=0;for(var k=0;k<f+1;k++)g[0][k]=0;for(h=1;h<=e;h++)for(k=1;k<=f;k++)c(a[h-1],b[k-1])?g[h][k]=g[h-1][k-1]+1:g[h][k]=Math.max(g[h-1][k],g[h][k-1]);for(var l=[],h=e,k=f;0<h&&0<k;)c(a[h-1],b[k-1])?(l.unshift(d(h-1,k-1)),h--,k--):g[h-1][k]>g[h][k-1]?h--:k--;return l};
goog.math.sum=function(a){return goog.array.reduce(arguments,function(a,c){return a+c},0)};goog.math.average=function(a){return goog.math.sum.apply(null,arguments)/arguments.length};goog.math.sampleVariance=function(a){var b=arguments.length;if(2>b)return 0;var c=goog.math.average.apply(null,arguments);return goog.math.sum.apply(null,goog.array.map(arguments,function(a){return Math.pow(a-c,2)}))/(b-1)};goog.math.standardDeviation=function(a){return Math.sqrt(goog.math.sampleVariance.apply(null,arguments))};
goog.math.isInt=function(a){return isFinite(a)&&0==a%1};goog.math.isFiniteNumber=function(a){return isFinite(a)&&!isNaN(a)};goog.math.log10Floor=function(a){if(0<a){var b=Math.round(Math.log(a)*Math.LOG10E);return b-(parseFloat("1e"+b)>a)}return 0==a?-Infinity:NaN};goog.math.safeFloor=function(a,b){goog.asserts.assert(!goog.isDef(b)||0<b);return Math.floor(a+(b||2E-15))};goog.math.safeCeil=function(a,b){goog.asserts.assert(!goog.isDef(b)||0<b);return Math.ceil(a-(b||2E-15))};goog.iter={};goog.iter.StopIteration="StopIteration"in goog.global?goog.global.StopIteration:Error("StopIteration");goog.iter.Iterator=function(){};goog.iter.Iterator.prototype.next=function(){throw goog.iter.StopIteration;};goog.iter.Iterator.prototype.__iterator__=function(a){return this};
goog.iter.toIterator=function(a){if(a instanceof goog.iter.Iterator)return a;if("function"==typeof a.__iterator__)return a.__iterator__(!1);if(goog.isArrayLike(a)){var b=0,c=new goog.iter.Iterator;c.next=function(){for(;;){if(b>=a.length)throw goog.iter.StopIteration;if(b in a)return a[b++];b++}};return c}throw Error("Not implemented");};
goog.iter.forEach=function(a,b,c){if(goog.isArrayLike(a))try{goog.array.forEach(a,b,c)}catch(d){if(d!==goog.iter.StopIteration)throw d;}else{a=goog.iter.toIterator(a);try{for(;;)b.call(c,a.next(),void 0,a)}catch(e){if(e!==goog.iter.StopIteration)throw e;}}};goog.iter.filter=function(a,b,c){var d=goog.iter.toIterator(a);a=new goog.iter.Iterator;a.next=function(){for(;;){var a=d.next();if(b.call(c,a,void 0,d))return a}};return a};
goog.iter.filterFalse=function(a,b,c){return goog.iter.filter(a,goog.functions.not(b),c)};goog.iter.range=function(a,b,c){var d=0,e=a,f=c||1;1<arguments.length&&(d=a,e=b);if(0==f)throw Error("Range step argument must not be zero");var g=new goog.iter.Iterator;g.next=function(){if(0<f&&d>=e||0>f&&d<=e)throw goog.iter.StopIteration;var a=d;d+=f;return a};return g};goog.iter.join=function(a,b){return goog.iter.toArray(a).join(b)};
goog.iter.map=function(a,b,c){var d=goog.iter.toIterator(a);a=new goog.iter.Iterator;a.next=function(){var a=d.next();return b.call(c,a,void 0,d)};return a};goog.iter.reduce=function(a,b,c,d){var e=c;goog.iter.forEach(a,function(a){e=b.call(d,e,a)});return e};goog.iter.some=function(a,b,c){a=goog.iter.toIterator(a);try{for(;;)if(b.call(c,a.next(),void 0,a))return!0}catch(d){if(d!==goog.iter.StopIteration)throw d;}return!1};
goog.iter.every=function(a,b,c){a=goog.iter.toIterator(a);try{for(;;)if(!b.call(c,a.next(),void 0,a))return!1}catch(d){if(d!==goog.iter.StopIteration)throw d;}return!0};goog.iter.chain=function(a){return goog.iter.chainFromIterable(arguments)};
goog.iter.chainFromIterable=function(a){var b=goog.iter.toIterator(a);a=new goog.iter.Iterator;var c=null;a.next=function(){for(;;){if(null==c){var a=b.next();c=goog.iter.toIterator(a)}try{return c.next()}catch(e){if(e!==goog.iter.StopIteration)throw e;c=null}}};return a};goog.iter.dropWhile=function(a,b,c){var d=goog.iter.toIterator(a);a=new goog.iter.Iterator;var e=!0;a.next=function(){for(;;){var a=d.next();if(!e||!b.call(c,a,void 0,d))return e=!1,a}};return a};
goog.iter.takeWhile=function(a,b,c){var d=goog.iter.toIterator(a);a=new goog.iter.Iterator;a.next=function(){var a=d.next();if(b.call(c,a,void 0,d))return a;throw goog.iter.StopIteration;};return a};goog.iter.toArray=function(a){if(goog.isArrayLike(a))return goog.array.toArray(a);a=goog.iter.toIterator(a);var b=[];goog.iter.forEach(a,function(a){b.push(a)});return b};
goog.iter.equals=function(a,b,c){a=goog.iter.zipLongest({},a,b);var d=c||goog.array.defaultCompareEquality;return goog.iter.every(a,function(a){return d(a[0],a[1])})};goog.iter.nextOrValue=function(a,b){try{return goog.iter.toIterator(a).next()}catch(c){if(c!=goog.iter.StopIteration)throw c;return b}};
goog.iter.product=function(a){if(goog.array.some(arguments,function(a){return!a.length})||!arguments.length)return new goog.iter.Iterator;var b=new goog.iter.Iterator,c=arguments,d=goog.array.repeat(0,c.length);b.next=function(){if(d){for(var a=goog.array.map(d,function(a,b){return c[b][a]}),b=d.length-1;0<=b;b--){goog.asserts.assert(d);if(d[b]<c[b].length-1){d[b]++;break}if(0==b){d=null;break}d[b]=0}return a}throw goog.iter.StopIteration;};return b};
goog.iter.cycle=function(a){var b=goog.iter.toIterator(a),c=[],d=0;a=new goog.iter.Iterator;var e=!1;a.next=function(){var a=null;if(!e)try{return a=b.next(),c.push(a),a}catch(g){if(g!=goog.iter.StopIteration||goog.array.isEmpty(c))throw g;e=!0}a=c[d];d=(d+1)%c.length;return a};return a};goog.iter.count=function(a,b){var c=a||0,d=goog.isDef(b)?b:1,e=new goog.iter.Iterator;e.next=function(){var a=c;c+=d;return a};return e};
goog.iter.repeat=function(a){var b=new goog.iter.Iterator;b.next=goog.functions.constant(a);return b};goog.iter.accumulate=function(a){var b=goog.iter.toIterator(a),c=0;a=new goog.iter.Iterator;a.next=function(){return c+=b.next()};return a};goog.iter.zip=function(a){var b=arguments,c=new goog.iter.Iterator;if(0<b.length){var d=goog.array.map(b,goog.iter.toIterator);c.next=function(){return goog.array.map(d,function(a){return a.next()})}}return c};
goog.iter.zipLongest=function(a,b){var c=goog.array.slice(arguments,1),d=new goog.iter.Iterator;if(0<c.length){var e=goog.array.map(c,goog.iter.toIterator);d.next=function(){var b=!1,c=goog.array.map(e,function(c){var d;try{d=c.next(),b=!0}catch(e){if(e!==goog.iter.StopIteration)throw e;d=a}return d});if(!b)throw goog.iter.StopIteration;return c}}return d};goog.iter.compress=function(a,b){var c=goog.iter.toIterator(b);return goog.iter.filter(a,function(){return!!c.next()})};
goog.iter.GroupByIterator_=function(a,b){this.iterator=goog.iter.toIterator(a);this.keyFunc=b||goog.functions.identity};goog.inherits(goog.iter.GroupByIterator_,goog.iter.Iterator);goog.iter.GroupByIterator_.prototype.next=function(){for(;this.currentKey==this.targetKey;)this.currentValue=this.iterator.next(),this.currentKey=this.keyFunc(this.currentValue);this.targetKey=this.currentKey;return[this.currentKey,this.groupItems_(this.targetKey)]};
goog.iter.GroupByIterator_.prototype.groupItems_=function(a){for(var b=[];this.currentKey==a;){b.push(this.currentValue);try{this.currentValue=this.iterator.next()}catch(c){if(c!==goog.iter.StopIteration)throw c;break}this.currentKey=this.keyFunc(this.currentValue)}return b};goog.iter.groupBy=function(a,b){return new goog.iter.GroupByIterator_(a,b)};
goog.iter.starMap=function(a,b,c){var d=goog.iter.toIterator(a);a=new goog.iter.Iterator;a.next=function(){var a=goog.iter.toArray(d.next());return b.apply(c,goog.array.concat(a,void 0,d))};return a};
goog.iter.tee=function(a,b){var c=goog.iter.toIterator(a),d=goog.isNumber(b)?b:2,e=goog.array.map(goog.array.range(d),function(){return[]}),f=function(){var a=c.next();goog.array.forEach(e,function(b){b.push(a)})};return goog.array.map(e,function(a){var b=new goog.iter.Iterator;b.next=function(){goog.array.isEmpty(a)&&f();goog.asserts.assert(!goog.array.isEmpty(a));return a.shift()};return b})};goog.iter.enumerate=function(a,b){return goog.iter.zip(goog.iter.count(b),a)};
goog.iter.limit=function(a,b){goog.asserts.assert(goog.math.isInt(b)&&0<=b);var c=goog.iter.toIterator(a),d=new goog.iter.Iterator,e=b;d.next=function(){if(0<e--)return c.next();throw goog.iter.StopIteration;};return d};goog.iter.consume=function(a,b){goog.asserts.assert(goog.math.isInt(b)&&0<=b);for(var c=goog.iter.toIterator(a);0<b--;)goog.iter.nextOrValue(c,null);return c};
goog.iter.slice=function(a,b,c){goog.asserts.assert(goog.math.isInt(b)&&0<=b);a=goog.iter.consume(a,b);goog.isNumber(c)&&(goog.asserts.assert(goog.math.isInt(c)&&c>=b),a=goog.iter.limit(a,c-b));return a};goog.iter.hasDuplicates_=function(a){var b=[];goog.array.removeDuplicates(a,b);return a.length!=b.length};goog.iter.permutations=function(a,b){var c=goog.iter.toArray(a),d=goog.isNumber(b)?b:c.length,c=goog.array.repeat(c,d),c=goog.iter.product.apply(void 0,c);return goog.iter.filter(c,function(a){return!goog.iter.hasDuplicates_(a)})};
goog.iter.combinations=function(a,b){function c(a){return d[a]}var d=goog.iter.toArray(a),e=goog.iter.range(d.length),e=goog.iter.permutations(e,b),f=goog.iter.filter(e,function(a){return goog.array.isSorted(a)}),e=new goog.iter.Iterator;e.next=function(){return goog.array.map(f.next(),c)};return e};
goog.iter.combinationsWithReplacement=function(a,b){function c(a){return d[a]}var d=goog.iter.toArray(a),e=goog.array.range(d.length),e=goog.array.repeat(e,b),e=goog.iter.product.apply(void 0,e),f=goog.iter.filter(e,function(a){return goog.array.isSorted(a)}),e=new goog.iter.Iterator;e.next=function(){return goog.array.map(f.next(),c)};return e};goog.structs={};goog.structs.Map=function(a,b){this.map_={};this.keys_=[];this.version_=this.count_=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else a&&this.addAll(a)};goog.structs.Map.prototype.getCount=function(){return this.count_};goog.structs.Map.prototype.getValues=function(){this.cleanupKeysArray_();for(var a=[],b=0;b<this.keys_.length;b++)a.push(this.map_[this.keys_[b]]);return a};
goog.structs.Map.prototype.getKeys=function(){this.cleanupKeysArray_();return this.keys_.concat()};goog.structs.Map.prototype.containsKey=function(a){return goog.structs.Map.hasKey_(this.map_,a)};goog.structs.Map.prototype.containsValue=function(a){for(var b=0;b<this.keys_.length;b++){var c=this.keys_[b];if(goog.structs.Map.hasKey_(this.map_,c)&&this.map_[c]==a)return!0}return!1};
goog.structs.Map.prototype.equals=function(a,b){if(this===a)return!0;if(this.count_!=a.getCount())return!1;var c=b||goog.structs.Map.defaultEquals;this.cleanupKeysArray_();for(var d,e=0;d=this.keys_[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};goog.structs.Map.defaultEquals=function(a,b){return a===b};goog.structs.Map.prototype.isEmpty=function(){return 0==this.count_};goog.structs.Map.prototype.clear=function(){this.map_={};this.version_=this.count_=this.keys_.length=0};
goog.structs.Map.prototype.remove=function(a){return goog.structs.Map.hasKey_(this.map_,a)?(delete this.map_[a],this.count_--,this.version_++,this.keys_.length>2*this.count_&&this.cleanupKeysArray_(),!0):!1};
goog.structs.Map.prototype.cleanupKeysArray_=function(){if(this.count_!=this.keys_.length){for(var a=0,b=0;a<this.keys_.length;){var c=this.keys_[a];goog.structs.Map.hasKey_(this.map_,c)&&(this.keys_[b++]=c);a++}this.keys_.length=b}if(this.count_!=this.keys_.length){for(var d={},b=a=0;a<this.keys_.length;)c=this.keys_[a],goog.structs.Map.hasKey_(d,c)||(this.keys_[b++]=c,d[c]=1),a++;this.keys_.length=b}};
goog.structs.Map.prototype.get=function(a,b){return goog.structs.Map.hasKey_(this.map_,a)?this.map_[a]:b};goog.structs.Map.prototype.set=function(a,b){goog.structs.Map.hasKey_(this.map_,a)||(this.count_++,this.keys_.push(a),this.version_++);this.map_[a]=b};goog.structs.Map.prototype.addAll=function(a){var b;a instanceof goog.structs.Map?(b=a.getKeys(),a=a.getValues()):(b=goog.object.getKeys(a),a=goog.object.getValues(a));for(var c=0;c<b.length;c++)this.set(b[c],a[c])};
goog.structs.Map.prototype.forEach=function(a,b){for(var c=this.getKeys(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};goog.structs.Map.prototype.clone=function(){return new goog.structs.Map(this)};goog.structs.Map.prototype.transpose=function(){for(var a=new goog.structs.Map,b=0;b<this.keys_.length;b++){var c=this.keys_[b];a.set(this.map_[c],c)}return a};
goog.structs.Map.prototype.toObject=function(){this.cleanupKeysArray_();for(var a={},b=0;b<this.keys_.length;b++){var c=this.keys_[b];a[c]=this.map_[c]}return a};goog.structs.Map.prototype.getKeyIterator=function(){return this.__iterator__(!0)};goog.structs.Map.prototype.getValueIterator=function(){return this.__iterator__(!1)};
goog.structs.Map.prototype.__iterator__=function(a){this.cleanupKeysArray_();var b=0,c=this.keys_,d=this.map_,e=this.version_,f=this,g=new goog.iter.Iterator;g.next=function(){for(;;){if(e!=f.version_)throw Error("The map has changed since the iterator was created");if(b>=c.length)throw goog.iter.StopIteration;var g=c[b++];return a?g:d[g]}};return g};goog.structs.Map.hasKey_=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};goog.structs.Collection=function(){};goog.structs.getCount=function(a){return"function"==typeof a.getCount?a.getCount():goog.isArrayLike(a)||goog.isString(a)?a.length:goog.object.getCount(a)};goog.structs.getValues=function(a){if("function"==typeof a.getValues)return a.getValues();if(goog.isString(a))return a.split("");if(goog.isArrayLike(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return goog.object.getValues(a)};
goog.structs.getKeys=function(a){if("function"==typeof a.getKeys)return a.getKeys();if("function"!=typeof a.getValues){if(goog.isArrayLike(a)||goog.isString(a)){var b=[];a=a.length;for(var c=0;c<a;c++)b.push(c);return b}return goog.object.getKeys(a)}};goog.structs.contains=function(a,b){return"function"==typeof a.contains?a.contains(b):"function"==typeof a.containsValue?a.containsValue(b):goog.isArrayLike(a)||goog.isString(a)?goog.array.contains(a,b):goog.object.containsValue(a,b)};
goog.structs.isEmpty=function(a){return"function"==typeof a.isEmpty?a.isEmpty():goog.isArrayLike(a)||goog.isString(a)?goog.array.isEmpty(a):goog.object.isEmpty(a)};goog.structs.clear=function(a){"function"==typeof a.clear?a.clear():goog.isArrayLike(a)?goog.array.clear(a):goog.object.clear(a)};
goog.structs.forEach=function(a,b,c){if("function"==typeof a.forEach)a.forEach(b,c);else if(goog.isArrayLike(a)||goog.isString(a))goog.array.forEach(a,b,c);else for(var d=goog.structs.getKeys(a),e=goog.structs.getValues(a),f=e.length,g=0;g<f;g++)b.call(c,e[g],d&&d[g],a)};
goog.structs.filter=function(a,b,c){if("function"==typeof a.filter)return a.filter(b,c);if(goog.isArrayLike(a)||goog.isString(a))return goog.array.filter(a,b,c);var d,e=goog.structs.getKeys(a),f=goog.structs.getValues(a),g=f.length;if(e){d={};for(var h=0;h<g;h++)b.call(c,f[h],e[h],a)&&(d[e[h]]=f[h])}else for(d=[],h=0;h<g;h++)b.call(c,f[h],void 0,a)&&d.push(f[h]);return d};
goog.structs.map=function(a,b,c){if("function"==typeof a.map)return a.map(b,c);if(goog.isArrayLike(a)||goog.isString(a))return goog.array.map(a,b,c);var d,e=goog.structs.getKeys(a),f=goog.structs.getValues(a),g=f.length;if(e){d={};for(var h=0;h<g;h++)d[e[h]]=b.call(c,f[h],e[h],a)}else for(d=[],h=0;h<g;h++)d[h]=b.call(c,f[h],void 0,a);return d};
goog.structs.some=function(a,b,c){if("function"==typeof a.some)return a.some(b,c);if(goog.isArrayLike(a)||goog.isString(a))return goog.array.some(a,b,c);for(var d=goog.structs.getKeys(a),e=goog.structs.getValues(a),f=e.length,g=0;g<f;g++)if(b.call(c,e[g],d&&d[g],a))return!0;return!1};
goog.structs.every=function(a,b,c){if("function"==typeof a.every)return a.every(b,c);if(goog.isArrayLike(a)||goog.isString(a))return goog.array.every(a,b,c);for(var d=goog.structs.getKeys(a),e=goog.structs.getValues(a),f=e.length,g=0;g<f;g++)if(!b.call(c,e[g],d&&d[g],a))return!1;return!0};goog.structs.Set=function(a){this.map_=new goog.structs.Map;a&&this.addAll(a)};goog.structs.Set.getKey_=function(a){var b=typeof a;return"object"==b&&a||"function"==b?"o"+goog.getUid(a):b.substr(0,1)+a};goog.structs.Set.prototype.getCount=function(){return this.map_.getCount()};goog.structs.Set.prototype.add=function(a){this.map_.set(goog.structs.Set.getKey_(a),a)};goog.structs.Set.prototype.addAll=function(a){a=goog.structs.getValues(a);for(var b=a.length,c=0;c<b;c++)this.add(a[c])};
goog.structs.Set.prototype.removeAll=function(a){a=goog.structs.getValues(a);for(var b=a.length,c=0;c<b;c++)this.remove(a[c])};goog.structs.Set.prototype.remove=function(a){return this.map_.remove(goog.structs.Set.getKey_(a))};goog.structs.Set.prototype.clear=function(){this.map_.clear()};goog.structs.Set.prototype.isEmpty=function(){return this.map_.isEmpty()};goog.structs.Set.prototype.contains=function(a){return this.map_.containsKey(goog.structs.Set.getKey_(a))};
goog.structs.Set.prototype.containsAll=function(a){return goog.structs.every(a,this.contains,this)};goog.structs.Set.prototype.intersection=function(a){var b=new goog.structs.Set;a=goog.structs.getValues(a);for(var c=0;c<a.length;c++){var d=a[c];this.contains(d)&&b.add(d)}return b};goog.structs.Set.prototype.difference=function(a){var b=this.clone();b.removeAll(a);return b};goog.structs.Set.prototype.getValues=function(){return this.map_.getValues()};goog.structs.Set.prototype.clone=function(){return new goog.structs.Set(this)};
goog.structs.Set.prototype.equals=function(a){return this.getCount()==goog.structs.getCount(a)&&this.isSubsetOf(a)};goog.structs.Set.prototype.isSubsetOf=function(a){var b=goog.structs.getCount(a);if(this.getCount()>b)return!1;!(a instanceof goog.structs.Set)&&5<b&&(a=new goog.structs.Set(a));return goog.structs.every(this,function(b){return goog.structs.contains(a,b)})};goog.structs.Set.prototype.__iterator__=function(a){return this.map_.__iterator__(!1)};/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
lf.proc={};lf.proc.Relation=function(a,b){this.entries=a;this.tables_=new goog.structs.Set(b)};lf.proc.Relation.prototype.isCompatible=function(a){return this.tables_.equals(a.tables_)};lf.proc.Relation.assertCompatible_=function(a,b){goog.asserts.assert(a.isCompatible(b),"Intersection/union operations only apply to compatible relations.")};lf.proc.Relation.prototype.getTables=function(){return this.tables_.getValues()};lf.proc.Relation.prototype.isPrefixApplied=function(){return 1<this.tables_.getCount()};
lf.proc.Relation.prototype.getPayloads=function(){return this.entries.map(function(a){return a.row.payload()})};lf.proc.Relation.prototype.getRowIds=function(){return this.entries.map(function(a){return a.row.id()})};lf.proc.Relation.emptyRelation_=null;lf.proc.Relation.createEmpty=function(){goog.isNull(lf.proc.Relation.emptyRelation_)&&(lf.proc.Relation.emptyRelation_=new lf.proc.Relation([],[]));return lf.proc.Relation.emptyRelation_};
lf.proc.Relation.intersect=function(a){if(0==a.length)return lf.proc.Relation.createEmpty();for(var b=a.reduce(function(b,c){lf.proc.Relation.assertCompatible_(a[0],c);return b+c.entries.length},0),c=Array(b),d=0,b=a.map(function(a){var b=new goog.structs.Map;a.entries.forEach(function(a){c[d++]=a;b.set(a.id,a)});return b}),e=new goog.structs.Map,f=0;f<c.length;f++)b.every(function(a){return a.containsKey(c[f].id)})&&e.set(c[f].id,c[f]);return new lf.proc.Relation(e.getValues(),a[0].tables_.getValues())};
lf.proc.Relation.union=function(a){if(0==a.length)return lf.proc.Relation.createEmpty();var b=new goog.structs.Map;a.forEach(function(c){lf.proc.Relation.assertCompatible_(a[0],c);c.entries.forEach(function(a){b.set(a.id,a)})});return new lf.proc.Relation(b.getValues(),a[0].tables_.getValues())};lf.proc.Relation.fromRows=function(a,b){var c=1<b.length,d=a.map(function(a){return new lf.proc.RelationEntry(a,c)});return new lf.proc.Relation(d,b)};
lf.proc.RelationEntry=function(a,b){this.row=a;this.id=lf.proc.RelationEntry.getNextId_();this.isPrefixApplied_=b};lf.proc.RelationEntry.id_=0;lf.proc.RelationEntry.getNextId_=function(){return lf.proc.RelationEntry.id_++};lf.proc.RelationEntry.prototype.getField=function(a){return this.isPrefixApplied_?this.row.payload()[a.getTable().getName()][a.getName()]:this.row.payload()[a.getName()]};
lf.proc.RelationEntry.prototype.setField=function(a,b){var c=a.getAlias();goog.isDefAndNotNull(c)?this.row.payload()[c]=b:this.isPrefixApplied_?(c=this.row.payload()[a.getTable().getName()],goog.isDefAndNotNull(c)||(c={},this.row.payload()[a.getTable().getName()]=c),c[a.getName()]=b):this.row.payload()[a.getName()]=b};
lf.proc.RelationEntry.combineEntries=function(a,b,c,d){var e={},f=function(a,b){if(a.isPrefixApplied_){var c=a.row.payload(),d;for(d in c)e[d]=c[d]}else e[b[0]]=a.row.payload()};f(a,b);f(c,d);a=new lf.Row(lf.Row.DUMMY_ID,e);return new lf.proc.RelationEntry(a,!0)};/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
lf.eval={};lf.eval.Type={BETWEEN:"between",EQ:"eq",GTE:"gte",GT:"gt",IN:"in",LTE:"lte",LT:"lt",MATCH:"match",NEQ:"neq"};lf.eval.Registry=function(){var a=lf.eval.buildNumberEvaluatorMap_();this.evaluationMaps_=new goog.structs.Map(lf.Type.BOOLEAN,lf.eval.buildBooleanEvaluatorMap_(),lf.Type.DATE_TIME,lf.eval.buildDateEvaluatorMap_(),lf.Type.NUMBER,a,lf.Type.INTEGER,a,lf.Type.STRING,lf.eval.buildStringEvaluatorMap_())};
lf.eval.Registry.prototype.getEvaluator=function(a,b){var c=this.evaluationMaps_.get(a,null);goog.asserts.assert(!goog.isNull(c),"Could not find evaluation map for "+a);c=c.get(b,null);goog.asserts.assert(!goog.isNull(c),"Could not find evaluator for "+a+", "+b);return c};
lf.eval.buildNumberEvaluatorMap_=function(){return new goog.structs.Map(lf.eval.Type.BETWEEN,function(a,b){return a>=b[0]&&a<=b[1]},lf.eval.Type.EQ,function(a,b){return a==b},lf.eval.Type.GTE,function(a,b){return a>=b},lf.eval.Type.GT,function(a,b){return a>b},lf.eval.Type.IN,function(a,b){return-1!=b.indexOf(a)},lf.eval.Type.LTE,function(a,b){return a<=b},lf.eval.Type.LT,function(a,b){return a<b},lf.eval.Type.NEQ,function(a,b){return a!=b})};
lf.eval.buildStringEvaluatorMap_=function(){return new goog.structs.Map(lf.eval.Type.BETWEEN,function(a,b){return a>=b[0]&&a<=b[1]},lf.eval.Type.EQ,function(a,b){return a==b},lf.eval.Type.GTE,function(a,b){return a>=b},lf.eval.Type.GT,function(a,b){return a>b},lf.eval.Type.IN,function(a,b){return-1!=b.indexOf(a)},lf.eval.Type.LTE,function(a,b){return a<=b},lf.eval.Type.LT,function(a,b){return a<b},lf.eval.Type.MATCH,function(a,b){return(new RegExp(b)).test(a)},lf.eval.Type.NEQ,function(a,b){return a!=
b})};
lf.eval.buildDateEvaluatorMap_=function(){return new goog.structs.Map(lf.eval.Type.BETWEEN,function(a,b){return a.getTime()>=b[0].getTime()&&a.getTime()<=b[1].getTime()},lf.eval.Type.EQ,function(a,b){var c=goog.isNull(a)?-1:a.getTime(),d=goog.isNull(b)?-1:b.getTime();return c==d},lf.eval.Type.GTE,function(a,b){return a.getTime()>=b.getTime()},lf.eval.Type.GT,function(a,b){return a.getTime()>b.getTime()},lf.eval.Type.IN,function(a,b){return b.some(function(b){return b.getTime()==a.getTime()})},lf.eval.Type.LTE,
function(a,b){return a.getTime()<=b.getTime()},lf.eval.Type.LT,function(a,b){return a.getTime()<b.getTime()},lf.eval.Type.NEQ,function(a,b){var c=goog.isNull(a)?-1:a.getTime(),d=goog.isNull(b)?-1:b.getTime();return c!=d})};lf.eval.buildBooleanEvaluatorMap_=function(){return new goog.structs.Map(lf.eval.Type.EQ,function(a,b){return a==b},lf.eval.Type.NEQ,function(a,b){return a!=b})};/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
lf.Exception=function(a,b){this.name=a;this.message=b};lf.Exception.Type={BLOCKING:"BlockingError",CONSTRAINT:"ConstraintError",CONTEXT:"ContextError",DATA:"DataError",NOT_FOUND:"NotFoundError",NOT_SUPPORTED:"NotSupportedError",QUOTA_EXCEEDED:"QuotaExceededError",SYNTAX:"SyntaxError",SCOPE_ERROR:"ScopeError",TIMEOUT:"TimeoutError",TOO_MANY_ROWS:"TooManyRowsError",TRANSACTION:"TransactionError",UNKNOWN:"UnknownError",UNINITIALIZED:"UninitializedError",VERSION:"VersionError"};/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
lf.Global=function(){this.services_=new goog.structs.Map};lf.Global.get=function(){lf.Global.instance_||(lf.Global.instance_=new lf.Global);return lf.Global.instance_};lf.Global.reset=function(){lf.Global.instance_=null};lf.Global.prototype.registerService=function(a,b){this.services_.set(a.toString(),b);return b};lf.Global.prototype.getService=function(a){var b=this.services_.get(a.toString(),null);if(null==b)throw new lf.Exception(lf.Exception.Type.NOT_FOUND,a.toString());return b};
lf.Global.prototype.isRegistered=function(a){return this.services_.containsKey(a.toString())};goog.labs={};goog.labs.object={};goog.labs.object.is=function(a,b){return a===b?0!==a||1/a===1/b:a!==a&&b!==b};goog.labs.structs={};goog.labs.structs.Map=function(){this.clear()};goog.labs.structs.Map.objectPropertyIsEnumerable_=Object.prototype.propertyIsEnumerable;goog.labs.structs.Map.objectHasOwnProperty_=Object.prototype.hasOwnProperty;
goog.labs.structs.Map.prototype.set=function(a,b){this.assertKeyIsString_(a);var c=!this.hasKeyInPrimaryStore_(a);this.map_[a]=b;if("__proto__"==a||!goog.labs.structs.Map.BrowserFeature.OBJECT_CREATE_SUPPORTED&&!goog.labs.structs.Map.objectPropertyIsEnumerable_.call(this.map_,a)){delete this.map_[a];var d=goog.array.indexOf(this.secondaryStoreKeys_,a);if(c=0>d)d=this.secondaryStoreKeys_.length;this.secondaryStoreKeys_[d]=a;this.secondaryStoreValues_[d]=b}c&&this.count_++};
goog.labs.structs.Map.prototype.get=function(a,b){this.assertKeyIsString_(a);if(this.hasKeyInPrimaryStore_(a))return this.map_[a];var c=goog.array.indexOf(this.secondaryStoreKeys_,a);return 0<=c?this.secondaryStoreValues_[c]:b};
goog.labs.structs.Map.prototype.remove=function(a){this.assertKeyIsString_(a);if(this.hasKeyInPrimaryStore_(a))return this.count_--,delete this.map_[a],!0;a=goog.array.indexOf(this.secondaryStoreKeys_,a);return 0<=a?(this.count_--,goog.array.removeAt(this.secondaryStoreKeys_,a),goog.array.removeAt(this.secondaryStoreValues_,a),!0):!1};goog.labs.structs.Map.prototype.addAll=function(a){goog.array.forEach(a.getKeys(),function(b){this.set(b,a.get(b))},this)};goog.labs.structs.Map.prototype.isEmpty=function(){return!this.count_};
goog.labs.structs.Map.prototype.getCount=function(){return this.count_};goog.labs.structs.Map.prototype.containsKey=function(a){this.assertKeyIsString_(a);return this.hasKeyInPrimaryStore_(a)||goog.array.contains(this.secondaryStoreKeys_,a)};goog.labs.structs.Map.prototype.containsValue=function(a){return goog.object.some(this.map_,function(b,c){return this.hasKeyInPrimaryStore_(c)&&goog.labs.object.is(b,a)},this)||goog.array.contains(this.secondaryStoreValues_,a)};
goog.labs.structs.Map.prototype.getKeys=function(){var a;if(goog.labs.structs.Map.BrowserFeature.OBJECT_KEYS_SUPPORTED)a=goog.array.clone(Object.keys(this.map_));else{a=[];for(var b in this.map_)goog.labs.structs.Map.objectHasOwnProperty_.call(this.map_,b)&&a.push(b)}goog.array.extend(a,this.secondaryStoreKeys_);return a};goog.labs.structs.Map.prototype.getValues=function(){for(var a=[],b=this.getKeys(),c=0;c<b.length;c++)a.push(this.get(b[c]));return a};
goog.labs.structs.Map.prototype.getEntries=function(){for(var a=[],b=this.getKeys(),c=0;c<b.length;c++){var d=b[c];a.push([d,this.get(d)])}return a};goog.labs.structs.Map.prototype.clear=function(){this.map_=goog.labs.structs.Map.BrowserFeature.OBJECT_CREATE_SUPPORTED?Object.create(null):{};this.secondaryStoreKeys_=[];this.secondaryStoreValues_=[];this.count_=0};goog.labs.structs.Map.prototype.clone=function(){var a=new goog.labs.structs.Map;a.addAll(this);return a};
goog.labs.structs.Map.prototype.hasKeyInPrimaryStore_=function(a){return"__proto__"==a?!1:goog.labs.structs.Map.BrowserFeature.OBJECT_CREATE_SUPPORTED?a in this.map_:goog.labs.structs.Map.objectHasOwnProperty_.call(this.map_,a)};goog.labs.structs.Map.prototype.assertKeyIsString_=function(a){goog.asserts.assert(goog.isString(a),"key must be a string.")};goog.labs.structs.Map.BrowserFeature={OBJECT_CREATE_SUPPORTED:!!Object.create,OBJECT_KEYS_SUPPORTED:!!Object.keys};goog.labs.structs.Multimap=function(){this.clear()};goog.labs.structs.Multimap.prototype.count_=0;goog.labs.structs.Multimap.prototype.clear=function(){this.count_=0;this.map_=new goog.labs.structs.Map};goog.labs.structs.Multimap.prototype.clone=function(){var a=new goog.labs.structs.Multimap;a.addAllFromMultimap(this);return a};goog.labs.structs.Multimap.prototype.add=function(a,b){var c=this.map_.get(a);c||this.map_.set(a,c=[]);c.push(b);this.count_++};
goog.labs.structs.Multimap.prototype.addAllValues=function(a,b){goog.array.forEach(b,function(b){this.add(a,b)},this)};goog.labs.structs.Multimap.prototype.addAllFromMultimap=function(a){goog.array.forEach(a.getEntries(),function(a){this.add(a[0],a[1])},this)};goog.labs.structs.Multimap.prototype.replaceValues=function(a,b){this.removeAll(a);this.addAllValues(a,b)};goog.labs.structs.Multimap.prototype.get=function(a){return(a=this.map_.get(a))?goog.array.clone(a):[]};
goog.labs.structs.Multimap.prototype.remove=function(a,b){var c=this.map_.get(a);if(!c)return!1;var d=goog.array.removeIf(c,function(a){return goog.labs.object.is(b,a)});d&&(this.count_--,0==c.length&&this.map_.remove(a));return d};goog.labs.structs.Multimap.prototype.removeAll=function(a){var b=this.map_.get(a);return this.map_.remove(a)?(this.count_-=b.length,!0):!1};goog.labs.structs.Multimap.prototype.isEmpty=function(){return!this.count_};goog.labs.structs.Multimap.prototype.getCount=function(){return this.count_};
goog.labs.structs.Multimap.prototype.containsEntry=function(a,b){var c=this.map_.get(a);return c?0<=goog.array.findIndex(c,function(a){return goog.labs.object.is(a,b)}):!1};goog.labs.structs.Multimap.prototype.containsKey=function(a){return this.map_.containsKey(a)};goog.labs.structs.Multimap.prototype.containsValue=function(a){return goog.array.some(this.map_.getValues(),function(b){return goog.array.some(b,function(b){return goog.labs.object.is(b,a)})})};
goog.labs.structs.Multimap.prototype.getKeys=function(){return this.map_.getKeys()};goog.labs.structs.Multimap.prototype.getValues=function(){return goog.array.flatten(this.map_.getValues())};goog.labs.structs.Multimap.prototype.getEntries=function(){for(var a=this.getKeys(),b=[],c=0;c<a.length;c++)for(var d=a[c],e=this.get(d),f=0;f<e.length;f++)b.push([d,e[f]]);return b};goog.structs.Node=function(a,b){this.key_=a;this.value_=b};goog.structs.Node.prototype.getKey=function(){return this.key_};goog.structs.Node.prototype.getValue=function(){return this.value_};goog.structs.Node.prototype.clone=function(){return new goog.structs.Node(this.key_,this.value_)};goog.structs.TreeNode=function(a,b){goog.structs.Node.call(this,a,b);this.children_=this.parent_=null};goog.inherits(goog.structs.TreeNode,goog.structs.Node);goog.structs.TreeNode.EMPTY_ARRAY_=[];goog.structs.TreeNode.prototype.clone=function(){return new goog.structs.TreeNode(this.getKey(),this.getValue())};goog.structs.TreeNode.prototype.deepClone=function(){var a=this.clone();this.forEachChild(function(b){a.addChild(b.deepClone())});return a};goog.structs.TreeNode.prototype.getParent=function(){return this.parent_};
goog.structs.TreeNode.prototype.isLeaf=function(){return!this.getChildCount()};goog.structs.TreeNode.prototype.isLastChild=function(){var a=this.getParent();return Boolean(a&&this==goog.array.peek(a.getChildren()))};goog.structs.TreeNode.prototype.getChildren=function(){return this.children_||goog.structs.TreeNode.EMPTY_ARRAY_};goog.structs.TreeNode.prototype.getChildAt=function(a){return this.getChildren()[a]||null};goog.structs.TreeNode.prototype.getChildCount=function(){return this.getChildren().length};
goog.structs.TreeNode.prototype.getDepth=function(){for(var a=0,b=this;b.getParent();)a++,b=b.getParent();return a};goog.structs.TreeNode.prototype.getAncestors=function(){for(var a=[],b=this.getParent();b;)a.push(b),b=b.getParent();return a};goog.structs.TreeNode.prototype.getRoot=function(){for(var a=this;a.getParent();)a=a.getParent();return a};
goog.structs.TreeNode.prototype.getSubtreeKeys=function(){var a=[];this.forEachChild(function(b){a.push(b.getKey());b.isLeaf()||a.push(b.getSubtreeKeys())});return a};goog.structs.TreeNode.prototype.contains=function(a){do a=a.getParent();while(a&&a!=this);return Boolean(a)};
goog.structs.TreeNode.findCommonAncestor=function(a){var b=arguments[0];if(!b)return null;for(var c=b.getDepth(),d=1;d<arguments.length;d++)for(var e=arguments[d],f=e.getDepth();e!=b;)f<=c&&(b=b.getParent(),c--),f>c&&(e=e.getParent(),f--);return b};goog.structs.TreeNode.prototype.getNodeByKey=function(a){if(this.getKey()==a)return this;for(var b=this.getChildren(),c=0;c<b.length;c++){var d=b[c].getNodeByKey(a);if(d)return d}return null};
goog.structs.TreeNode.prototype.forEachChild=function(a,b){goog.array.forEach(this.getChildren(),a,b)};goog.structs.TreeNode.prototype.forEachDescendant=function(a,b){goog.array.forEach(this.getChildren(),function(c){a.call(b,c);c.forEachDescendant(a,b)})};goog.structs.TreeNode.prototype.traverse=function(a,b){!1!==a.call(b,this)&&goog.array.forEach(this.getChildren(),function(c){c.traverse(a,b)})};goog.structs.TreeNode.prototype.setParent=function(a){this.parent_=a};
goog.structs.TreeNode.prototype.addChild=function(a){this.addChildAt(a,this.children_?this.children_.length:0)};goog.structs.TreeNode.prototype.addChildAt=function(a,b){goog.asserts.assert(!a.getParent());a.setParent(this);this.children_=this.children_||[];goog.asserts.assert(0<=b&&b<=this.children_.length);goog.array.insertAt(this.children_,a,b)};
goog.structs.TreeNode.prototype.replaceChildAt=function(a,b){goog.asserts.assert(!a.getParent(),"newChild must not have parent node");var c=this.getChildren(),d=c[b];goog.asserts.assert(d,"Invalid child or child index is given.");d.setParent(null);c[b]=a;a.setParent(this);return d};goog.structs.TreeNode.prototype.replaceChild=function(a,b){return this.replaceChildAt(a,goog.array.indexOf(this.getChildren(),b))};
goog.structs.TreeNode.prototype.removeChildAt=function(a){var b=this.children_&&this.children_[a];return b?(b.setParent(null),goog.array.removeAt(this.children_,a),0==this.children_.length&&delete this.children_,b):null};goog.structs.TreeNode.prototype.removeChild=function(a){return this.removeChildAt(goog.array.indexOf(this.getChildren(),a))};goog.structs.TreeNode.prototype.removeChildren=function(){this.children_&&goog.array.forEach(this.children_,function(a){a.setParent(null)});delete this.children_};/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
lf.Predicate=function(){};lf.Predicate.prototype.eval=function(a){};lf.Predicate.prototype.setComplement=function(a){};lf.Predicate.prototype.copy=function(){};/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
lf.pred={};lf.pred.PredicateNode=function(){goog.structs.TreeNode.call(this,"","")};goog.inherits(lf.pred.PredicateNode,goog.structs.TreeNode);/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
lf.service={};lf.service.ServiceId=function(a){this.serviceId_=a};lf.service.ServiceId.prototype.toString=function(){return this.serviceId_};lf.service.BACK_STORE=new lf.service.ServiceId("backstore");lf.service.CACHE=new lf.service.ServiceId("cache");lf.service.INDEX_STORE=new lf.service.ServiceId("indexstore");lf.service.QUERY_ENGINE=new lf.service.ServiceId("engine");lf.service.RUNNER=new lf.service.ServiceId("runner");lf.service.EVAL_REGISTRY=new lf.service.ServiceId("evalregistry");
lf.service.OBSERVER_REGISTRY=new lf.service.ServiceId("observerregistry");/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
lf.pred.JoinPredicate=function(a,b,c){lf.pred.PredicateNode.call(this);this.leftColumn=a;this.rightColumn=b;this.evaluatorType=c;this.evaluatorFn_=lf.Global.get().getService(lf.service.EVAL_REGISTRY).getEvaluator(this.leftColumn.getType(),this.evaluatorType)};goog.inherits(lf.pred.JoinPredicate,lf.pred.PredicateNode);lf.pred.JoinPredicate.prototype.copy=function(){return new lf.pred.JoinPredicate(this.leftColumn,this.rightColumn,this.evaluatorType)};
lf.pred.JoinPredicate.prototype.eval=function(a){var b=a.entries.filter(function(a){var b=a.getField(this.leftColumn);a=a.getField(this.rightColumn);return this.evaluatorFn_(b,a)},this);return new lf.proc.Relation(b,a.getTables())};lf.pred.JoinPredicate.prototype.toString=function(){return"join_pred("+this.leftColumn.getNormalizedName()+", "+this.rightColumn.getNormalizedName()+")"};lf.pred.JoinPredicate.prototype.appliesToLeft_=function(a){return-1!=a.getTables().indexOf(this.leftColumn.getTable().getName())};
lf.pred.JoinPredicate.prototype.appliesToRight_=function(a){return-1!=a.getTables().indexOf(this.rightColumn.getTable().getName())};lf.pred.JoinPredicate.prototype.detectLeftRight_=function(a,b){var c=null,d=null;this.appliesToLeft_(a)?(this.assertRelationsApply_(a,b),c=a,d=b):(this.assertRelationsApply_(b,a),c=b,d=a);return[c,d]};
lf.pred.JoinPredicate.prototype.assertRelationsApply_=function(a,b){goog.asserts.assert(this.appliesToLeft_(a),"Mismatch between join predicate left operand and right relation.");goog.asserts.assert(this.appliesToRight_(b),"Mismatch between join predicate right operand and right relation.")};
lf.pred.JoinPredicate.prototype.evalRelations=function(a,b){var c=this.detectLeftRight_(a,b),d=c[0],c=c[1];return this.evaluatorType==lf.eval.Type.EQ?this.evalRelationsHashJoin_(d,c):this.evalRelationsNestedLoopJoin_(d,c)};
lf.pred.JoinPredicate.prototype.evalRelationsNestedLoopJoin_=function(a,b){for(var c=[],d=a.getTables(),e=b.getTables(),f=0;f<a.entries.length;f++)for(var g=0;g<b.entries.length;g++)if(this.evaluatorFn_(a.entries[f].getField(this.leftColumn),b.entries[g].getField(this.rightColumn))){var h=lf.proc.RelationEntry.combineEntries(a.entries[f],d,b.entries[g],e);c.push(h)}d=a.getTables().concat(b.getTables());return new lf.proc.Relation(c,d)};
lf.pred.JoinPredicate.prototype.evalRelationsHashJoin_=function(a,b){var c=a,d=b,e=this.leftColumn,f=this.rightColumn;a.entries.length>b.entries.length&&(c=b,d=a,e=this.rightColumn,f=this.leftColumn);var g=new goog.labs.structs.Multimap,h=[];c.entries.forEach(function(a){var b=String(a.getField(e));g.add(b,a)});var k=c.getTables(),l=d.getTables();d.entries.forEach(function(a){var b=String(a.getField(f));g.containsKey(b)&&g.get(b).forEach(function(b){b=lf.proc.RelationEntry.combineEntries(a,l,b,k);
h.push(b)})});c=a.getTables().concat(b.getTables());return new lf.proc.Relation(h,c)};/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
lf.bind=function(a){return new lf.Binder(a)};lf.Binder=function(a){this.index_=a};lf.Binder.prototype.getIndex=function(){return this.index_};/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
lf.index={};lf.index.KeyRange=function(a,b,c,d){this.from=a;this.to=b;this.excludeLower=goog.isNull(this.from)?!1:c;this.excludeUpper=goog.isNull(this.to)?!1:d};
lf.index.KeyRange.prototype.getComparator=function(){var a=goog.isNull(this.from)?function(){return!0}:this.excludeLower?goog.bind(function(a){return a>this.from},this):goog.bind(function(a){return a>=this.from},this),b=goog.isNull(this.to)?function(){return!0}:this.excludeUpper?goog.bind(function(a){return a<this.to},this):goog.bind(function(a){return a<=this.to},this);return goog.bind(function(c){return a(c)&&b(c)},this)};
lf.index.KeyRange.prototype.toString=function(){return(this.excludeLower?"(":"[")+(goog.isNull(this.from)?"unbound":this.from)+", "+(goog.isNull(this.to)?"unbound":this.to)+(this.excludeUpper?")":"]")};
lf.index.KeyRange.prototype.complement=function(){if(goog.isNull(this.from)&&goog.isNull(this.to))return[];var a=null,b=null;goog.isNull(this.from)||(a=new lf.index.KeyRange(null,this.from,!1,!this.excludeLower));goog.isNull(this.to)||(b=new lf.index.KeyRange(this.to,null,!this.excludeUpper,!1));return[a,b].filter(function(a){return!goog.isNull(a)})};lf.index.KeyRange.upperBound=function(a,b){return new lf.index.KeyRange(null,a,!1,b||!1)};
lf.index.KeyRange.lowerBound=function(a,b){return new lf.index.KeyRange(a,null,b||!1,!1)};lf.index.KeyRange.only=function(a){return new lf.index.KeyRange(a,a,!1,!1)};lf.index.KeyRange.all=function(){return new lf.index.KeyRange(null,null,!1,!1)};/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
lf.pred.ValuePredicate=function(a,b,c){lf.pred.PredicateNode.call(this);this.column=a;this.value=b;this.evaluatorType=c;this.evaluatorFn_=lf.Global.get().getService(lf.service.EVAL_REGISTRY).getEvaluator(this.column.getType(),this.evaluatorType);this.isComplement_=!1;this.binder_=b};goog.inherits(lf.pred.ValuePredicate,lf.pred.PredicateNode);
lf.pred.ValuePredicate.prototype.copy=function(){var a=new lf.pred.ValuePredicate(this.column,this.value,this.evaluatorType);a.setBinder(this.binder_);a.setComplement(this.isComplement_);return a};lf.pred.ValuePredicate.prototype.setComplement=function(a){this.isComplement_=a};lf.pred.ValuePredicate.prototype.setBinder=function(a){this.binder_=a};
lf.pred.ValuePredicate.prototype.checkBinding_=function(){var a=!1;this.value instanceof lf.Binder||(a=goog.isArray(this.value)?!this.value.some(function(a){return a instanceof lf.Binder}):!0);if(!a)throw new lf.Exception(lf.Exception.Type.SYNTAX,"Value is not bounded");};
lf.pred.ValuePredicate.prototype.eval=function(a){this.checkBinding_();if(this.evaluatorType==lf.eval.Type.IN)return this.evalAsIn_(a);var b=a.entries.filter(function(a){return this.evaluatorFn_(a.getField(this.column),this.value)!=this.isComplement_},this);return new lf.proc.Relation(b,a.getTables())};
lf.pred.ValuePredicate.prototype.bind=function(a){var b=function(b){if(a.length<=b)throw new lf.Exception(lf.Exception.Type.SYNTAX,"Cannot bind to given array: out of range.");};if(this.binder_ instanceof lf.Binder){var c=this.binder_.getIndex();b(c);this.value=a[c]}else goog.isArray(this.binder_)&&(this.value=this.binder_.map(function(c){return c instanceof lf.Binder?(b(c.getIndex()),a[c.getIndex()]):c}))};
lf.pred.ValuePredicate.prototype.evalAsIn_=function(a){goog.asserts.assert(this.evaluatorType==lf.eval.Type.IN,"ValuePredicate#evalAsIn_() called for wrong predicate type.");var b=new goog.structs.Set(this.value),c=goog.bind(function(a){return b.contains(a)!=this.isComplement_},this),d=a.entries.filter(function(a){return c(a.getField(this.column))},this);return new lf.proc.Relation(d,a.getTables())};
lf.pred.ValuePredicate.prototype.toString=function(){return"value_pred("+this.column.getNormalizedName()+")"};lf.pred.ValuePredicate.prototype.isKeyRangeCompatible=function(){this.checkBinding_();return!goog.isNull(this.value)&&(this.evaluatorType==lf.eval.Type.BETWEEN||this.evaluatorType==lf.eval.Type.EQ||this.evaluatorType==lf.eval.Type.GT||this.evaluatorType==lf.eval.Type.GTE||this.evaluatorType==lf.eval.Type.LT||this.evaluatorType==lf.eval.Type.LTE)};
lf.pred.ValuePredicate.prototype.toKeyRange=function(){goog.asserts.assert(this.isKeyRangeCompatible(),"Could not convert predicate to key range.");var a=null,a=this.evaluatorType==lf.eval.Type.BETWEEN?new lf.index.KeyRange(this.value[0],this.value[1],!1,!1):this.evaluatorType==lf.eval.Type.EQ?lf.index.KeyRange.only(this.value):this.evaluatorType==lf.eval.Type.GTE?lf.index.KeyRange.lowerBound(this.value):this.evaluatorType==lf.eval.Type.GT?lf.index.KeyRange.lowerBound(this.value,!0):this.evaluatorType==
lf.eval.Type.LTE?lf.index.KeyRange.upperBound(this.value):lf.index.KeyRange.upperBound(this.value,!0);return this.isComplement_?a.complement():[a]};/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
lf.pred.createPredicate=function(a,b,c){return goog.isNull(b)?new lf.pred.ValuePredicate(a,b,c):goog.isDef(b.getNormalizedName)?new lf.pred.JoinPredicate(a,b,c):new lf.pred.ValuePredicate(a,b,c)};/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
lf.schema.BaseColumn=function(a,b,c,d,e){this.table_=a;this.name_=b;this.isUnique_=c;this.type_=d;this.alias_=e||null};lf.schema.BaseColumn.prototype.getName=function(){return this.name_};lf.schema.BaseColumn.prototype.getNormalizedName=function(){return this.table_.getName()+"."+this.name_};lf.schema.BaseColumn.prototype.toString=function(){return this.getNormalizedName()};lf.schema.BaseColumn.prototype.getTable=function(){return this.table_};lf.schema.BaseColumn.prototype.getType=function(){return this.type_};
lf.schema.BaseColumn.prototype.getAlias=function(){return this.alias_};lf.schema.BaseColumn.prototype.getIndices=function(){goog.isDefAndNotNull(this.indices_)||(this.indices_=[],this.getTable().getIndices().forEach(function(a){-1!=a.columnNames.indexOf(this.name_)&&this.indices_.push(a)},this));return this.indices_};lf.schema.BaseColumn.prototype.isUnique=function(){return this.isUnique_};lf.schema.BaseColumn.prototype.eq=function(a){return lf.pred.createPredicate(this,a,lf.eval.Type.EQ)};
lf.schema.BaseColumn.prototype.neq=function(a){return lf.pred.createPredicate(this,a,lf.eval.Type.NEQ)};lf.schema.BaseColumn.prototype.lt=function(a){return lf.pred.createPredicate(this,a,lf.eval.Type.LT)};lf.schema.BaseColumn.prototype.lte=function(a){return lf.pred.createPredicate(this,a,lf.eval.Type.LTE)};lf.schema.BaseColumn.prototype.gt=function(a){return lf.pred.createPredicate(this,a,lf.eval.Type.GT)};lf.schema.BaseColumn.prototype.gte=function(a){return lf.pred.createPredicate(this,a,lf.eval.Type.GTE)};
lf.schema.BaseColumn.prototype.match=function(a){return lf.pred.createPredicate(this,a,lf.eval.Type.MATCH)};lf.schema.BaseColumn.prototype.between=function(a,b){return lf.pred.createPredicate(this,[a,b],lf.eval.Type.BETWEEN)};lf.schema.BaseColumn.prototype.in=function(a){return lf.pred.createPredicate(this,a,lf.eval.Type.IN)};lf.schema.BaseColumn.prototype.isNull=function(){return this.eq(null)};lf.schema.BaseColumn.prototype.isNotNull=function(){return this.neq(null)};
lf.schema.BaseColumn.prototype.as=function(a){return new lf.schema.BaseColumn(this.table_,this.name_,this.isUnique_,this.type_,a)};var movie={db:{}};movie.db.row={};movie.db.schema={};movie.db.schema.Database=function(){this.movie_=new movie.db.schema.Movie;this.actor_=new movie.db.schema.Actor;this.director_=new movie.db.schema.Director;this.movieGenre_=new movie.db.schema.MovieGenre;this.movieDirector_=new movie.db.schema.MovieDirector;this.movieActor_=new movie.db.schema.MovieActor};movie.db.schema.Database.prototype.getName=function(){return"mv"};movie.db.schema.Database.prototype.getVersion=function(){return 1};
movie.db.schema.Database.prototype.getTables=function(){return[this.movie_,this.actor_,this.director_,this.movieGenre_,this.movieDirector_,this.movieActor_]};movie.db.schema.Database.prototype.getMovie=function(){return this.movie_};movie.db.schema.Database.prototype.getActor=function(){return this.actor_};movie.db.schema.Database.prototype.getDirector=function(){return this.director_};movie.db.schema.Database.prototype.getMovieGenre=function(){return this.movieGenre_};
movie.db.schema.Database.prototype.getMovieDirector=function(){return this.movieDirector_};movie.db.schema.Database.prototype.getMovieActor=function(){return this.movieActor_};
movie.db.schema.Movie=function(){this.columns_=[];this.id=new lf.schema.BaseColumn(this,"id",!0,lf.Type.INTEGER);this.columns_.push(this.id);this.title=new lf.schema.BaseColumn(this,"title",!1,lf.Type.STRING);this.columns_.push(this.title);this.year=new lf.schema.BaseColumn(this,"year",!1,lf.Type.INTEGER);this.columns_.push(this.year);this.rating=new lf.schema.BaseColumn(this,"rating",!1,lf.Type.STRING);this.columns_.push(this.rating);this.company=new lf.schema.BaseColumn(this,"company",!1,lf.Type.STRING);
this.columns_.push(this.company)};movie.db.schema.Movie.prototype.getName=function(){return"Movie"};movie.db.schema.Movie.prototype.createRow=function(a){return new movie.db.row.Movie(lf.Row.getNextId(),a)};movie.db.schema.Movie.prototype.deserializeRow=function(a){return new movie.db.row.Movie(a.id,a.value)};movie.db.schema.Movie.prototype.getIndices=function(){this.indices_||(this.indices_=[new lf.schema.Index("Movie","pkMovie",!0,!1,["id"])]);return this.indices_};
movie.db.schema.Movie.prototype.getColumns=function(){return this.columns_};movie.db.schema.Movie.prototype.getConstraint=function(){var a=new lf.schema.Index("Movie","pkMovie",!0,!1,["id"]);return new lf.schema.Constraint(a,[this.id,this.title,this.year,this.rating,this.company],[],[])};movie.db.row.MovieType=function(){};movie.db.row.MovieDbType=function(){};movie.db.row.Movie=function(a,b){lf.Row.call(this,a,b)};goog.inherits(movie.db.row.Movie,lf.Row);
movie.db.row.Movie.prototype.defaultPayload=function(){var a=new movie.db.row.MovieType;a.id=0;a.title="";a.year=0;a.rating="";a.company="";return a};movie.db.row.Movie.prototype.toDbPayload=function(){var a=new movie.db.row.MovieDbType;a.id=this.payload().id;a.title=this.payload().title;a.year=this.payload().year;a.rating=this.payload().rating;a.company=this.payload().company;return a};movie.db.row.Movie.prototype.keyOfIndex=function(a){switch(a){case "Movie.pkMovie":return this.payload().id;case "##row_id##":return this.id()}return null};
movie.db.row.Movie.prototype.getId=function(){return this.payload().id};movie.db.row.Movie.prototype.setId=function(a){this.payload().id=a;return this};movie.db.row.Movie.prototype.getTitle=function(){return this.payload().title};movie.db.row.Movie.prototype.setTitle=function(a){this.payload().title=a;return this};movie.db.row.Movie.prototype.getYear=function(){return this.payload().year};movie.db.row.Movie.prototype.setYear=function(a){this.payload().year=a;return this};
movie.db.row.Movie.prototype.getRating=function(){return this.payload().rating};movie.db.row.Movie.prototype.setRating=function(a){this.payload().rating=a;return this};movie.db.row.Movie.prototype.getCompany=function(){return this.payload().company};movie.db.row.Movie.prototype.setCompany=function(a){this.payload().company=a;return this};
movie.db.schema.Actor=function(){this.columns_=[];this.id=new lf.schema.BaseColumn(this,"id",!0,lf.Type.INTEGER);this.columns_.push(this.id);this.lastName=new lf.schema.BaseColumn(this,"lastName",!1,lf.Type.STRING);this.columns_.push(this.lastName);this.firstName=new lf.schema.BaseColumn(this,"firstName",!1,lf.Type.STRING);this.columns_.push(this.firstName);this.sex=new lf.schema.BaseColumn(this,"sex",!1,lf.Type.STRING);this.columns_.push(this.sex);this.dateOfBirth=new lf.schema.BaseColumn(this,"dateOfBirth",
!1,lf.Type.DATE_TIME);this.columns_.push(this.dateOfBirth);this.dateOfDeath=new lf.schema.BaseColumn(this,"dateOfDeath",!1,lf.Type.DATE_TIME);this.columns_.push(this.dateOfDeath)};movie.db.schema.Actor.prototype.getName=function(){return"Actor"};movie.db.schema.Actor.prototype.createRow=function(a){return new movie.db.row.Actor(lf.Row.getNextId(),a)};
movie.db.schema.Actor.prototype.deserializeRow=function(a){var b=a.value,c=new movie.db.row.ActorType;c.id=b.id;c.lastName=b.lastName;c.firstName=b.firstName;c.sex=b.sex;c.dateOfBirth=new Date(b.dateOfBirth);c.dateOfDeath=goog.isNull(b.dateOfDeath)?null:new Date(b.dateOfDeath);return new movie.db.row.Actor(a.id,c)};movie.db.schema.Actor.prototype.getIndices=function(){this.indices_||(this.indices_=[new lf.schema.Index("Actor","pkActor",!0,!1,["id"])]);return this.indices_};
movie.db.schema.Actor.prototype.getColumns=function(){return this.columns_};movie.db.schema.Actor.prototype.getConstraint=function(){var a=new lf.schema.Index("Actor","pkActor",!0,!1,["id"]);return new lf.schema.Constraint(a,[this.id,this.lastName,this.firstName,this.sex,this.dateOfBirth],[],[])};movie.db.row.ActorType=function(){};movie.db.row.ActorDbType=function(){};movie.db.row.Actor=function(a,b){lf.Row.call(this,a,b)};goog.inherits(movie.db.row.Actor,lf.Row);
movie.db.row.Actor.prototype.defaultPayload=function(){var a=new movie.db.row.ActorType;a.id=0;a.lastName="";a.firstName="";a.sex="";a.dateOfBirth=new Date(0);a.dateOfDeath=null;return a};
movie.db.row.Actor.prototype.toDbPayload=function(){var a=new movie.db.row.ActorDbType;a.id=this.payload().id;a.lastName=this.payload().lastName;a.firstName=this.payload().firstName;a.sex=this.payload().sex;a.dateOfBirth=this.payload().dateOfBirth.getTime();a.dateOfDeath=goog.isNull(this.payload().dateOfDeath)?null:this.payload().dateOfDeath.getTime();return a};movie.db.row.Actor.prototype.keyOfIndex=function(a){switch(a){case "Actor.pkActor":return this.payload().id;case "##row_id##":return this.id()}return null};
movie.db.row.Actor.prototype.getId=function(){return this.payload().id};movie.db.row.Actor.prototype.setId=function(a){this.payload().id=a;return this};movie.db.row.Actor.prototype.getLastName=function(){return this.payload().lastName};movie.db.row.Actor.prototype.setLastName=function(a){this.payload().lastName=a;return this};movie.db.row.Actor.prototype.getFirstName=function(){return this.payload().firstName};movie.db.row.Actor.prototype.setFirstName=function(a){this.payload().firstName=a;return this};
movie.db.row.Actor.prototype.getSex=function(){return this.payload().sex};movie.db.row.Actor.prototype.setSex=function(a){this.payload().sex=a;return this};movie.db.row.Actor.prototype.getDateOfBirth=function(){return this.payload().dateOfBirth};movie.db.row.Actor.prototype.setDateOfBirth=function(a){this.payload().dateOfBirth=a;return this};movie.db.row.Actor.prototype.getDateOfDeath=function(){return this.payload().dateOfDeath};
movie.db.row.Actor.prototype.setDateOfDeath=function(a){this.payload().dateOfDeath=a;return this};
movie.db.schema.Director=function(){this.columns_=[];this.id=new lf.schema.BaseColumn(this,"id",!0,lf.Type.INTEGER);this.columns_.push(this.id);this.lastName=new lf.schema.BaseColumn(this,"lastName",!1,lf.Type.STRING);this.columns_.push(this.lastName);this.firstName=new lf.schema.BaseColumn(this,"firstName",!1,lf.Type.STRING);this.columns_.push(this.firstName);this.dateOfBirth=new lf.schema.BaseColumn(this,"dateOfBirth",!1,lf.Type.DATE_TIME);this.columns_.push(this.dateOfBirth);this.dateOfDeath=new lf.schema.BaseColumn(this,
"dateOfDeath",!1,lf.Type.DATE_TIME);this.columns_.push(this.dateOfDeath)};movie.db.schema.Director.prototype.getName=function(){return"Director"};movie.db.schema.Director.prototype.createRow=function(a){return new movie.db.row.Director(lf.Row.getNextId(),a)};
movie.db.schema.Director.prototype.deserializeRow=function(a){var b=a.value,c=new movie.db.row.DirectorType;c.id=b.id;c.lastName=b.lastName;c.firstName=b.firstName;c.dateOfBirth=new Date(b.dateOfBirth);c.dateOfDeath=goog.isNull(b.dateOfDeath)?null:new Date(b.dateOfDeath);return new movie.db.row.Director(a.id,c)};movie.db.schema.Director.prototype.getIndices=function(){this.indices_||(this.indices_=[new lf.schema.Index("Director","pkDirector",!0,!1,["id"])]);return this.indices_};
movie.db.schema.Director.prototype.getColumns=function(){return this.columns_};movie.db.schema.Director.prototype.getConstraint=function(){var a=new lf.schema.Index("Director","pkDirector",!0,!1,["id"]);return new lf.schema.Constraint(a,[this.id,this.lastName,this.firstName,this.dateOfBirth],[],[])};movie.db.row.DirectorType=function(){};movie.db.row.DirectorDbType=function(){};movie.db.row.Director=function(a,b){lf.Row.call(this,a,b)};goog.inherits(movie.db.row.Director,lf.Row);
movie.db.row.Director.prototype.defaultPayload=function(){var a=new movie.db.row.DirectorType;a.id=0;a.lastName="";a.firstName="";a.dateOfBirth=new Date(0);a.dateOfDeath=null;return a};
movie.db.row.Director.prototype.toDbPayload=function(){var a=new movie.db.row.DirectorDbType;a.id=this.payload().id;a.lastName=this.payload().lastName;a.firstName=this.payload().firstName;a.dateOfBirth=this.payload().dateOfBirth.getTime();a.dateOfDeath=goog.isNull(this.payload().dateOfDeath)?null:this.payload().dateOfDeath.getTime();return a};movie.db.row.Director.prototype.keyOfIndex=function(a){switch(a){case "Director.pkDirector":return this.payload().id;case "##row_id##":return this.id()}return null};
movie.db.row.Director.prototype.getId=function(){return this.payload().id};movie.db.row.Director.prototype.setId=function(a){this.payload().id=a;return this};movie.db.row.Director.prototype.getLastName=function(){return this.payload().lastName};movie.db.row.Director.prototype.setLastName=function(a){this.payload().lastName=a;return this};movie.db.row.Director.prototype.getFirstName=function(){return this.payload().firstName};
movie.db.row.Director.prototype.setFirstName=function(a){this.payload().firstName=a;return this};movie.db.row.Director.prototype.getDateOfBirth=function(){return this.payload().dateOfBirth};movie.db.row.Director.prototype.setDateOfBirth=function(a){this.payload().dateOfBirth=a;return this};movie.db.row.Director.prototype.getDateOfDeath=function(){return this.payload().dateOfDeath};movie.db.row.Director.prototype.setDateOfDeath=function(a){this.payload().dateOfDeath=a;return this};
movie.db.schema.MovieGenre=function(){this.columns_=[];this.movieId=new lf.schema.BaseColumn(this,"movieId",!1,lf.Type.INTEGER);this.columns_.push(this.movieId);this.genre=new lf.schema.BaseColumn(this,"genre",!1,lf.Type.STRING);this.columns_.push(this.genre)};movie.db.schema.MovieGenre.prototype.getName=function(){return"MovieGenre"};movie.db.schema.MovieGenre.prototype.createRow=function(a){return new movie.db.row.MovieGenre(lf.Row.getNextId(),a)};
movie.db.schema.MovieGenre.prototype.deserializeRow=function(a){return new movie.db.row.MovieGenre(a.id,a.value)};movie.db.schema.MovieGenre.prototype.getIndices=function(){this.indices_||(this.indices_=[]);return this.indices_};movie.db.schema.MovieGenre.prototype.getColumns=function(){return this.columns_};movie.db.schema.MovieGenre.prototype.getConstraint=function(){return new lf.schema.Constraint(null,[this.movieId,this.genre],[],[])};movie.db.row.MovieGenreType=function(){};
movie.db.row.MovieGenreDbType=function(){};movie.db.row.MovieGenre=function(a,b){lf.Row.call(this,a,b)};goog.inherits(movie.db.row.MovieGenre,lf.Row);movie.db.row.MovieGenre.prototype.defaultPayload=function(){var a=new movie.db.row.MovieGenreType;a.movieId=0;a.genre="";return a};movie.db.row.MovieGenre.prototype.toDbPayload=function(){var a=new movie.db.row.MovieGenreDbType;a.movieId=this.payload().movieId;a.genre=this.payload().genre;return a};movie.db.row.MovieGenre.prototype.keyOfIndex=function(a){switch(a){case "##row_id##":return this.id()}return null};
movie.db.row.MovieGenre.prototype.getMovieId=function(){return this.payload().movieId};movie.db.row.MovieGenre.prototype.setMovieId=function(a){this.payload().movieId=a;return this};movie.db.row.MovieGenre.prototype.getGenre=function(){return this.payload().genre};movie.db.row.MovieGenre.prototype.setGenre=function(a){this.payload().genre=a;return this};
movie.db.schema.MovieDirector=function(){this.columns_=[];this.movieId=new lf.schema.BaseColumn(this,"movieId",!1,lf.Type.INTEGER);this.columns_.push(this.movieId);this.directorId=new lf.schema.BaseColumn(this,"directorId",!1,lf.Type.INTEGER);this.columns_.push(this.directorId)};movie.db.schema.MovieDirector.prototype.getName=function(){return"MovieDirector"};movie.db.schema.MovieDirector.prototype.createRow=function(a){return new movie.db.row.MovieDirector(lf.Row.getNextId(),a)};
movie.db.schema.MovieDirector.prototype.deserializeRow=function(a){return new movie.db.row.MovieDirector(a.id,a.value)};movie.db.schema.MovieDirector.prototype.getIndices=function(){this.indices_||(this.indices_=[]);return this.indices_};movie.db.schema.MovieDirector.prototype.getColumns=function(){return this.columns_};movie.db.schema.MovieDirector.prototype.getConstraint=function(){return new lf.schema.Constraint(null,[this.movieId,this.directorId],[],[])};movie.db.row.MovieDirectorType=function(){};
movie.db.row.MovieDirectorDbType=function(){};movie.db.row.MovieDirector=function(a,b){lf.Row.call(this,a,b)};goog.inherits(movie.db.row.MovieDirector,lf.Row);movie.db.row.MovieDirector.prototype.defaultPayload=function(){var a=new movie.db.row.MovieDirectorType;a.movieId=0;a.directorId=0;return a};movie.db.row.MovieDirector.prototype.toDbPayload=function(){var a=new movie.db.row.MovieDirectorDbType;a.movieId=this.payload().movieId;a.directorId=this.payload().directorId;return a};
movie.db.row.MovieDirector.prototype.keyOfIndex=function(a){switch(a){case "##row_id##":return this.id()}return null};movie.db.row.MovieDirector.prototype.getMovieId=function(){return this.payload().movieId};movie.db.row.MovieDirector.prototype.setMovieId=function(a){this.payload().movieId=a;return this};movie.db.row.MovieDirector.prototype.getDirectorId=function(){return this.payload().directorId};movie.db.row.MovieDirector.prototype.setDirectorId=function(a){this.payload().directorId=a;return this};
movie.db.schema.MovieActor=function(){this.columns_=[];this.movieId=new lf.schema.BaseColumn(this,"movieId",!1,lf.Type.INTEGER);this.columns_.push(this.movieId);this.actorId=new lf.schema.BaseColumn(this,"actorId",!1,lf.Type.INTEGER);this.columns_.push(this.actorId);this.role=new lf.schema.BaseColumn(this,"role",!1,lf.Type.STRING);this.columns_.push(this.role)};movie.db.schema.MovieActor.prototype.getName=function(){return"MovieActor"};
movie.db.schema.MovieActor.prototype.createRow=function(a){return new movie.db.row.MovieActor(lf.Row.getNextId(),a)};movie.db.schema.MovieActor.prototype.deserializeRow=function(a){return new movie.db.row.MovieActor(a.id,a.value)};movie.db.schema.MovieActor.prototype.getIndices=function(){this.indices_||(this.indices_=[]);return this.indices_};movie.db.schema.MovieActor.prototype.getColumns=function(){return this.columns_};
movie.db.schema.MovieActor.prototype.getConstraint=function(){return new lf.schema.Constraint(null,[this.movieId,this.actorId,this.role],[],[])};movie.db.row.MovieActorType=function(){};movie.db.row.MovieActorDbType=function(){};movie.db.row.MovieActor=function(a,b){lf.Row.call(this,a,b)};goog.inherits(movie.db.row.MovieActor,lf.Row);movie.db.row.MovieActor.prototype.defaultPayload=function(){var a=new movie.db.row.MovieActorType;a.movieId=0;a.actorId=0;a.role="";return a};
movie.db.row.MovieActor.prototype.toDbPayload=function(){var a=new movie.db.row.MovieActorDbType;a.movieId=this.payload().movieId;a.actorId=this.payload().actorId;a.role=this.payload().role;return a};movie.db.row.MovieActor.prototype.keyOfIndex=function(a){switch(a){case "##row_id##":return this.id()}return null};movie.db.row.MovieActor.prototype.getMovieId=function(){return this.payload().movieId};movie.db.row.MovieActor.prototype.setMovieId=function(a){this.payload().movieId=a;return this};
movie.db.row.MovieActor.prototype.getActorId=function(){return this.payload().actorId};movie.db.row.MovieActor.prototype.setActorId=function(a){this.payload().actorId=a;return this};movie.db.row.MovieActor.prototype.getRole=function(){return this.payload().role};movie.db.row.MovieActor.prototype.setRole=function(a){this.payload().role=a;return this};/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
lf.pred.Operator={AND:"and",OR:"or"};/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
lf.tree={};lf.tree.map=function(a,b){var c=[],d=null,e=null;a.traverse(function(a){var g=b(a);null==a.getParent()?e=g:d.addChild(g);1<a.getChildCount()&&c.push(g);a.isLeaf()||(d=g);var h=c[c.length-1];a.isLeaf()&&(a.isLastChild()&&g.getParent()==h&&c.pop(),d=c[c.length-1])});return e};lf.tree.getLeafNodes=function(a){var b=[];a.forEachDescendant(function(a){a.isLeaf()&&b.push(a)});return b};
lf.tree.removeNode=function(a){var b=a.getParent(),c=0;goog.isNull(b)||(c=b.getChildren().indexOf(a),b.removeChild(a));a.getChildren().slice().forEach(function(d,e){a.removeChild(d);goog.isNull(b)||b.addChildAt(d,c+e)})};lf.tree.insertNodeAt=function(a,b){a.getChildren().slice().forEach(function(c){a.removeChild(c);b.addChild(c)});a.addChild(b)};
lf.tree.swapNodeWithChild=function(a){goog.asserts.assert(1==a.getChildCount());var b=a.getChildAt(0);goog.asserts.assert(1==b.getChildCount());lf.tree.removeNode(a);lf.tree.insertNodeAt(b,a);return b};
lf.tree.pushNodeBelowChild=function(a,b,c){goog.asserts.assert(1==a.getChildCount());var d=a.getChildAt(0);goog.asserts.assert(1<d.getChildCount());var e=d.getChildren().slice();if(!e.some(function(a){return b(a)}))return a;lf.tree.removeNode(a);e.forEach(function(e,g){if(b(e)){var h=c(a);d.removeChildAt(g);h.addChild(e);d.addChildAt(h,g)}});return d};
lf.tree.replaceChainWithChain=function(a,b,c,d){var e=a.getParent();goog.isNull(e)||(a=e.getChildren().indexOf(a),e.removeChildAt(a),e.addChildAt(c,a));b.getChildren().slice().forEach(function(a){b.removeChild(a);d.addChild(a)});return c};lf.tree.replaceNodeWithChain=function(a,b,c){return lf.tree.replaceChainWithChain(a,a,b,c)};lf.tree.replaceChainWithNode=function(a,b,c){return lf.tree.replaceChainWithChain(a,b,c,c)};
lf.tree.toString=function(a,b){var c=b||function(a){return a.toString()+"\n"},d="";a.traverse(function(a){for(var b=0;b<a.getDepth();b++)d+="-";d+=c(a)});return d};/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
lf.pred.CombinedPredicate=function(a){lf.pred.PredicateNode.call(this);this.operator=a;this.isComplement_=!1};goog.inherits(lf.pred.CombinedPredicate,lf.pred.PredicateNode);lf.pred.CombinedPredicate.prototype.copy=function(){return lf.tree.map(this,function(a){if(a instanceof lf.pred.CombinedPredicate){var b=new lf.pred.CombinedPredicate(a.operator);b.isComplement_=a.isComplement_;return b}return a.copy()}.bind(this))};
lf.pred.CombinedPredicate.prototype.setComplement=function(a){this.isComplement_!=a&&(this.isComplement_=a,this.operator=this.operator==lf.pred.Operator.AND?lf.pred.Operator.OR:lf.pred.Operator.AND,this.getChildren().forEach(function(b){return b.setComplement(a)}))};lf.pred.CombinedPredicate.prototype.eval=function(a){var b=this.getChildren().map(function(b){return b.eval(a)});return this.combineResults_(b)};
lf.pred.CombinedPredicate.prototype.combineResults_=function(a){return this.operator==lf.pred.Operator.AND?lf.proc.Relation.intersect(a):this.operator==lf.pred.Operator.OR?lf.proc.Relation.union(a):lf.proc.Relation.createEmpty()};lf.pred.CombinedPredicate.prototype.toString=function(){return"combined_pred_"+this.operator.toString()};/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
lf.op={};lf.op.and=function(a,b){var c=new lf.pred.CombinedPredicate(lf.pred.Operator.AND);c.addChild(a);c.addChild(b);return c};lf.op.or=function(a,b){var c=new lf.pred.CombinedPredicate(lf.pred.Operator.OR);c.addChild(a);c.addChild(b);return c};lf.op.not=function(a){a.setComplement(!0);return a};/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
lf.query={};lf.query.UpdateContext=function(){};goog.promise={};goog.promise.Resolver=function(){};goog.testing={};goog.testing.watchers={};goog.testing.watchers.resetWatchers_=[];goog.testing.watchers.signalClockReset=function(){for(var a=goog.testing.watchers.resetWatchers_,b=0;b<a.length;b++)goog.testing.watchers.resetWatchers_[b]()};goog.testing.watchers.watchClockReset=function(a){goog.testing.watchers.resetWatchers_.push(a)};goog.debug.entryPointRegistry={};goog.debug.EntryPointMonitor=function(){};goog.debug.entryPointRegistry.refList_=[];goog.debug.entryPointRegistry.monitors_=[];goog.debug.entryPointRegistry.monitorsMayExist_=!1;goog.debug.entryPointRegistry.register=function(a){goog.debug.entryPointRegistry.refList_[goog.debug.entryPointRegistry.refList_.length]=a;if(goog.debug.entryPointRegistry.monitorsMayExist_)for(var b=goog.debug.entryPointRegistry.monitors_,c=0;c<b.length;c++)a(goog.bind(b[c].wrap,b[c]))};
goog.debug.entryPointRegistry.monitorAll=function(a){goog.debug.entryPointRegistry.monitorsMayExist_=!0;for(var b=goog.bind(a.wrap,a),c=0;c<goog.debug.entryPointRegistry.refList_.length;c++)goog.debug.entryPointRegistry.refList_[c](b);goog.debug.entryPointRegistry.monitors_.push(a)};
goog.debug.entryPointRegistry.unmonitorAllIfPossible=function(a){var b=goog.debug.entryPointRegistry.monitors_;goog.asserts.assert(a==b[b.length-1],"Only the most recent monitor can be unwrapped.");a=goog.bind(a.unwrap,a);for(var c=0;c<goog.debug.entryPointRegistry.refList_.length;c++)goog.debug.entryPointRegistry.refList_[c](a);b.length--};goog.labs.userAgent={};goog.labs.userAgent.util={};goog.labs.userAgent.util.getNativeUserAgentString_=function(){var a=goog.labs.userAgent.util.getNavigator_();return a&&(a=a.userAgent)?a:""};goog.labs.userAgent.util.getNavigator_=function(){return goog.global.navigator};goog.labs.userAgent.util.userAgent_=goog.labs.userAgent.util.getNativeUserAgentString_();goog.labs.userAgent.util.setUserAgent=function(a){goog.labs.userAgent.util.userAgent_=a||goog.labs.userAgent.util.getNativeUserAgentString_()};
goog.labs.userAgent.util.getUserAgent=function(){return goog.labs.userAgent.util.userAgent_};goog.labs.userAgent.util.matchUserAgent=function(a){var b=goog.labs.userAgent.util.getUserAgent();return goog.string.contains(b,a)};goog.labs.userAgent.util.matchUserAgentIgnoreCase=function(a){var b=goog.labs.userAgent.util.getUserAgent();return goog.string.caseInsensitiveContains(b,a)};
goog.labs.userAgent.util.extractVersionTuples=function(a){for(var b=/(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g,c=[],d;d=b.exec(a);)c.push([d[1],d[2],d[3]||void 0]);return c};goog.labs.userAgent.browser={};goog.labs.userAgent.browser.matchOpera_=function(){return goog.labs.userAgent.util.matchUserAgent("Opera")||goog.labs.userAgent.util.matchUserAgent("OPR")};goog.labs.userAgent.browser.matchIE_=function(){return goog.labs.userAgent.util.matchUserAgent("Trident")||goog.labs.userAgent.util.matchUserAgent("MSIE")};goog.labs.userAgent.browser.matchFirefox_=function(){return goog.labs.userAgent.util.matchUserAgent("Firefox")};
goog.labs.userAgent.browser.matchSafari_=function(){return goog.labs.userAgent.util.matchUserAgent("Safari")&&!goog.labs.userAgent.util.matchUserAgent("Chrome")&&!goog.labs.userAgent.util.matchUserAgent("CriOS")&&!goog.labs.userAgent.util.matchUserAgent("Android")};goog.labs.userAgent.browser.matchCoast_=function(){return goog.labs.userAgent.util.matchUserAgent("Coast")};
goog.labs.userAgent.browser.matchIosWebview_=function(){return(goog.labs.userAgent.util.matchUserAgent("iPad")||goog.labs.userAgent.util.matchUserAgent("iPhone"))&&!goog.labs.userAgent.browser.matchSafari_()&&!goog.labs.userAgent.browser.matchChrome_()&&!goog.labs.userAgent.browser.matchCoast_()&&goog.labs.userAgent.util.matchUserAgent("AppleWebKit")};goog.labs.userAgent.browser.matchChrome_=function(){return goog.labs.userAgent.util.matchUserAgent("Chrome")||goog.labs.userAgent.util.matchUserAgent("CriOS")};
goog.labs.userAgent.browser.matchAndroidBrowser_=function(){return!goog.labs.userAgent.browser.isChrome()&&goog.labs.userAgent.util.matchUserAgent("Android")};goog.labs.userAgent.browser.isOpera=goog.labs.userAgent.browser.matchOpera_;goog.labs.userAgent.browser.isIE=goog.labs.userAgent.browser.matchIE_;goog.labs.userAgent.browser.isFirefox=goog.labs.userAgent.browser.matchFirefox_;goog.labs.userAgent.browser.isSafari=goog.labs.userAgent.browser.matchSafari_;goog.labs.userAgent.browser.isCoast=goog.labs.userAgent.browser.matchCoast_;
goog.labs.userAgent.browser.isIosWebview=goog.labs.userAgent.browser.matchIosWebview_;goog.labs.userAgent.browser.isChrome=goog.labs.userAgent.browser.matchChrome_;goog.labs.userAgent.browser.isAndroidBrowser=goog.labs.userAgent.browser.matchAndroidBrowser_;goog.labs.userAgent.browser.isSilk=function(){return goog.labs.userAgent.util.matchUserAgent("Silk")};
goog.labs.userAgent.browser.getVersion=function(){function a(a){a=goog.array.find(a,d);return c[a]||""}var b=goog.labs.userAgent.util.getUserAgent();if(goog.labs.userAgent.browser.isIE())return goog.labs.userAgent.browser.getIEVersion_(b);var b=goog.labs.userAgent.util.extractVersionTuples(b),c={};goog.array.forEach(b,function(a){c[a[0]]=a[1]});var d=goog.partial(goog.object.containsKey,c);return goog.labs.userAgent.browser.isOpera()?a(["Version","Opera","OPR"]):goog.labs.userAgent.browser.isChrome()?
a(["Chrome","CriOS"]):(b=b[2])&&b[1]||""};goog.labs.userAgent.browser.isVersionOrHigher=function(a){return 0<=goog.string.compareVersions(goog.labs.userAgent.browser.getVersion(),a)};
goog.labs.userAgent.browser.getIEVersion_=function(a){var b=/rv: *([\d\.]*)/.exec(a);if(b&&b[1])return b[1];var b="",c=/MSIE +([\d\.]+)/.exec(a);if(c&&c[1])if(a=/Trident\/(\d.\d)/.exec(a),"7.0"==c[1])if(a&&a[1])switch(a[1]){case "4.0":b="8.0";break;case "5.0":b="9.0";break;case "6.0":b="10.0";break;case "7.0":b="11.0"}else b="7.0";else b=c[1];return b};goog.async={};goog.async.throwException=function(a){goog.global.setTimeout(function(){throw a;},0)};goog.async.nextTick=function(a,b,c){var d=a;b&&(d=goog.bind(a,b));d=goog.async.nextTick.wrapCallback_(d);!goog.isFunction(goog.global.setImmediate)||!c&&goog.global.Window&&goog.global.Window.prototype.setImmediate==goog.global.setImmediate?(goog.async.nextTick.setImmediate_||(goog.async.nextTick.setImmediate_=goog.async.nextTick.getSetImmediateEmulator_()),goog.async.nextTick.setImmediate_(d)):goog.global.setImmediate(d)};
goog.async.nextTick.getSetImmediateEmulator_=function(){var a=goog.global.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&(a=function(){var a=document.createElement("iframe");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host,a=goog.bind(function(a){if(("*"==
d||a.origin==d)&&a.data==c)this.port1.onmessage()},this);b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});if("undefined"!==typeof a&&!goog.labs.userAgent.browser.isIE()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(goog.isDef(c.next)){c=c.next;var a=c.cb;c.cb=null;a()}};return function(a){d.next={cb:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("script")?function(a){var b=
document.createElement("script");b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};document.documentElement.appendChild(b)}:function(a){goog.global.setTimeout(a,0)}};goog.async.nextTick.wrapCallback_=goog.functions.identity;goog.debug.entryPointRegistry.register(function(a){goog.async.nextTick.wrapCallback_=a});goog.async.run=function(a,b){goog.async.run.schedule_||goog.async.run.initializeRunner_();goog.async.run.workQueueScheduled_||(goog.async.run.schedule_(),goog.async.run.workQueueScheduled_=!0);goog.async.run.workQueue_.push(new goog.async.run.WorkItem_(a,b))};goog.async.run.initializeRunner_=function(){if(goog.global.Promise&&goog.global.Promise.resolve){var a=goog.global.Promise.resolve();goog.async.run.schedule_=function(){a.then(goog.async.run.processWorkQueue)}}else goog.async.run.schedule_=function(){goog.async.nextTick(goog.async.run.processWorkQueue)}};
goog.async.run.forceNextTick=function(){goog.async.run.schedule_=function(){goog.async.nextTick(goog.async.run.processWorkQueue)}};goog.async.run.workQueueScheduled_=!1;goog.async.run.workQueue_=[];goog.DEBUG&&(goog.async.run.resetQueue_=function(){goog.async.run.workQueueScheduled_=!1;goog.async.run.workQueue_=[]},goog.testing.watchers.watchClockReset(goog.async.run.resetQueue_));
goog.async.run.processWorkQueue=function(){for(;goog.async.run.workQueue_.length;){var a=goog.async.run.workQueue_;goog.async.run.workQueue_=[];for(var b=0;b<a.length;b++){var c=a[b];try{c.fn.call(c.scope)}catch(d){goog.async.throwException(d)}}}goog.async.run.workQueueScheduled_=!1};goog.async.run.WorkItem_=function(a,b){this.fn=a;this.scope=b};goog.Thenable=function(){};goog.Thenable.prototype.then=function(a,b,c){};goog.Thenable.IMPLEMENTED_BY_PROP="$goog_Thenable";goog.Thenable.addImplementation=function(a){goog.exportProperty(a.prototype,"then",a.prototype.then);COMPILED?a.prototype[goog.Thenable.IMPLEMENTED_BY_PROP]=!0:a.prototype.$goog_Thenable=!0};goog.Thenable.isImplementedBy=function(a){if(!a)return!1;try{return COMPILED?!!a[goog.Thenable.IMPLEMENTED_BY_PROP]:!!a.$goog_Thenable}catch(b){return!1}};goog.Promise=function(a,b){this.state_=goog.Promise.State_.PENDING;this.result_=void 0;this.callbackEntries_=this.parent_=null;this.executing_=!1;0<goog.Promise.UNHANDLED_REJECTION_DELAY?this.unhandledRejectionId_=0:0==goog.Promise.UNHANDLED_REJECTION_DELAY&&(this.hadUnhandledRejection_=!1);goog.Promise.LONG_STACK_TRACES&&(this.stack_=[],this.addStackTrace_(Error("created")),this.currentStep_=0);try{var c=this;a.call(b,function(a){c.resolve_(goog.Promise.State_.FULFILLED,a)},function(a){if(goog.DEBUG&&
!(a instanceof goog.Promise.CancellationError))try{if(a instanceof Error)throw a;throw Error("Promise rejected.");}catch(b){}c.resolve_(goog.Promise.State_.REJECTED,a)})}catch(d){this.resolve_(goog.Promise.State_.REJECTED,d)}};goog.Promise.LONG_STACK_TRACES=!1;goog.Promise.UNHANDLED_REJECTION_DELAY=0;goog.Promise.State_={PENDING:0,BLOCKED:1,FULFILLED:2,REJECTED:3};goog.Promise.resolve=function(a){return new goog.Promise(function(b,c){b(a)})};
goog.Promise.reject=function(a){return new goog.Promise(function(b,c){c(a)})};goog.Promise.race=function(a){return new goog.Promise(function(b,c){a.length||b(void 0);for(var d=0,e;e=a[d];d++)e.then(b,c)})};goog.Promise.all=function(a){return new goog.Promise(function(b,c){var d=a.length,e=[];if(d)for(var f=function(a,c){d--;e[a]=c;0==d&&b(e)},g=function(a){c(a)},h=0,k;k=a[h];h++)k.then(goog.partial(f,h),g);else b(e)})};
goog.Promise.firstFulfilled=function(a){return new goog.Promise(function(b,c){var d=a.length,e=[];if(d)for(var f=function(a){b(a)},g=function(a,b){d--;e[a]=b;0==d&&c(e)},h=0,k;k=a[h];h++)k.then(f,goog.partial(g,h));else b(void 0)})};goog.Promise.withResolver=function(){var a,b,c=new goog.Promise(function(c,e){a=c;b=e});return new goog.Promise.Resolver_(c,a,b)};
goog.Promise.prototype.then=function(a,b,c){null!=a&&goog.asserts.assertFunction(a,"opt_onFulfilled should be a function.");null!=b&&goog.asserts.assertFunction(b,"opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?");goog.Promise.LONG_STACK_TRACES&&this.addStackTrace_(Error("then"));return this.addChildPromise_(goog.isFunction(a)?a:null,goog.isFunction(b)?b:null,c)};goog.Thenable.addImplementation(goog.Promise);
goog.Promise.prototype.thenAlways=function(a,b){goog.Promise.LONG_STACK_TRACES&&this.addStackTrace_(Error("thenAlways"));var c=function(){try{a.call(b)}catch(c){goog.Promise.handleRejection_.call(null,c)}};this.addCallbackEntry_({child:null,onRejected:c,onFulfilled:c});return this};goog.Promise.prototype.thenCatch=function(a,b){goog.Promise.LONG_STACK_TRACES&&this.addStackTrace_(Error("thenCatch"));return this.addChildPromise_(null,a,b)};
goog.Promise.prototype.cancel=function(a){this.state_==goog.Promise.State_.PENDING&&goog.async.run(function(){var b=new goog.Promise.CancellationError(a);this.cancelInternal_(b)},this)};goog.Promise.prototype.cancelInternal_=function(a){this.state_==goog.Promise.State_.PENDING&&(this.parent_?this.parent_.cancelChild_(this,a):this.resolve_(goog.Promise.State_.REJECTED,a))};
goog.Promise.prototype.cancelChild_=function(a,b){if(this.callbackEntries_){for(var c=0,d=-1,e=0,f;f=this.callbackEntries_[e];e++)if(f=f.child)if(c++,f==a&&(d=e),0<=d&&1<c)break;0<=d&&(this.state_==goog.Promise.State_.PENDING&&1==c?this.cancelInternal_(b):(c=this.callbackEntries_.splice(d,1)[0],this.executeCallback_(c,goog.Promise.State_.REJECTED,b)))}};
goog.Promise.prototype.addCallbackEntry_=function(a){this.callbackEntries_&&this.callbackEntries_.length||this.state_!=goog.Promise.State_.FULFILLED&&this.state_!=goog.Promise.State_.REJECTED||this.scheduleCallbacks_();this.callbackEntries_||(this.callbackEntries_=[]);this.callbackEntries_.push(a)};
goog.Promise.prototype.addChildPromise_=function(a,b,c){var d={child:null,onFulfilled:null,onRejected:null};d.child=new goog.Promise(function(e,f){d.onFulfilled=a?function(b){try{var d=a.call(c,b);e(d)}catch(k){f(k)}}:e;d.onRejected=b?function(a){try{var d=b.call(c,a);!goog.isDef(d)&&a instanceof goog.Promise.CancellationError?f(a):e(d)}catch(k){f(k)}}:f});d.child.parent_=this;this.addCallbackEntry_(d);return d.child};
goog.Promise.prototype.unblockAndFulfill_=function(a){goog.asserts.assert(this.state_==goog.Promise.State_.BLOCKED);this.state_=goog.Promise.State_.PENDING;this.resolve_(goog.Promise.State_.FULFILLED,a)};goog.Promise.prototype.unblockAndReject_=function(a){goog.asserts.assert(this.state_==goog.Promise.State_.BLOCKED);this.state_=goog.Promise.State_.PENDING;this.resolve_(goog.Promise.State_.REJECTED,a)};
goog.Promise.prototype.resolve_=function(a,b){if(this.state_==goog.Promise.State_.PENDING){if(this==b)a=goog.Promise.State_.REJECTED,b=new TypeError("Promise cannot resolve to itself");else{if(goog.Thenable.isImplementedBy(b)){this.state_=goog.Promise.State_.BLOCKED;b.then(this.unblockAndFulfill_,this.unblockAndReject_,this);return}if(goog.isObject(b))try{var c=b.then;if(goog.isFunction(c)){this.tryThen_(b,c);return}}catch(d){a=goog.Promise.State_.REJECTED,b=d}}this.result_=b;this.state_=a;this.scheduleCallbacks_();
a!=goog.Promise.State_.REJECTED||b instanceof goog.Promise.CancellationError||goog.Promise.addUnhandledRejection_(this,b)}};goog.Promise.prototype.tryThen_=function(a,b){this.state_=goog.Promise.State_.BLOCKED;var c=this,d=!1,e=function(a){d||(d=!0,c.unblockAndFulfill_(a))},f=function(a){d||(d=!0,c.unblockAndReject_(a))};try{b.call(a,e,f)}catch(g){f(g)}};goog.Promise.prototype.scheduleCallbacks_=function(){this.executing_||(this.executing_=!0,goog.async.run(this.executeCallbacks_,this))};
goog.Promise.prototype.executeCallbacks_=function(){for(;this.callbackEntries_&&this.callbackEntries_.length;){var a=this.callbackEntries_;this.callbackEntries_=[];for(var b=0;b<a.length;b++)goog.Promise.LONG_STACK_TRACES&&this.currentStep_++,this.executeCallback_(a[b],this.state_,this.result_)}this.executing_=!1};goog.Promise.prototype.executeCallback_=function(a,b,c){if(b==goog.Promise.State_.FULFILLED)a.onFulfilled(c);else a.child&&this.removeUnhandledRejection_(),a.onRejected(c)};
goog.Promise.prototype.addStackTrace_=function(a){if(goog.Promise.LONG_STACK_TRACES&&goog.isString(a.stack)){var b=a.stack.split("\n",4)[3];a=a.message;a+=Array(11-a.length).join(" ");this.stack_.push(a+b)}};
goog.Promise.prototype.appendLongStack_=function(a){if(goog.Promise.LONG_STACK_TRACES&&a&&goog.isString(a.stack)&&this.stack_.length){for(var b=["Promise trace:"],c=this;c;c=c.parent_){for(var d=this.currentStep_;0<=d;d--)b.push(c.stack_[d]);b.push("Value: ["+(c.state_==goog.Promise.State_.REJECTED?"REJECTED":"FULFILLED")+"] <"+String(c.result_)+">")}a.stack+="\n\n"+b.join("\n")}};
goog.Promise.prototype.removeUnhandledRejection_=function(){if(0<goog.Promise.UNHANDLED_REJECTION_DELAY)for(var a=this;a&&a.unhandledRejectionId_;a=a.parent_)goog.global.clearTimeout(a.unhandledRejectionId_),a.unhandledRejectionId_=0;else if(0==goog.Promise.UNHANDLED_REJECTION_DELAY)for(a=this;a&&a.hadUnhandledRejection_;a=a.parent_)a.hadUnhandledRejection_=!1};
goog.Promise.addUnhandledRejection_=function(a,b){0<goog.Promise.UNHANDLED_REJECTION_DELAY?a.unhandledRejectionId_=goog.global.setTimeout(function(){a.appendLongStack_(b);goog.Promise.handleRejection_.call(null,b)},goog.Promise.UNHANDLED_REJECTION_DELAY):0==goog.Promise.UNHANDLED_REJECTION_DELAY&&(a.hadUnhandledRejection_=!0,goog.async.run(function(){a.hadUnhandledRejection_&&(a.appendLongStack_(b),goog.Promise.handleRejection_.call(null,b))}))};goog.Promise.handleRejection_=goog.async.throwException;
goog.Promise.setUnhandledRejectionHandler=function(a){goog.Promise.handleRejection_=a};goog.Promise.CancellationError=function(a){goog.debug.Error.call(this,a)};goog.inherits(goog.Promise.CancellationError,goog.debug.Error);goog.Promise.CancellationError.prototype.name="cancel";goog.Promise.Resolver_=function(a,b,c){this.promise=a;this.resolve=b;this.reject=c};/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
lf.query.observe=function(a,b){lf.Global.get().getService(lf.service.OBSERVER_REGISTRY).addObserver(a,b)};lf.query.unobserve=function(a,b){lf.Global.get().getService(lf.service.OBSERVER_REGISTRY).removeObserver(a,b)};lf.query.Builder=function(){};lf.query.Select=function(){};lf.query.Insert=function(){};lf.query.Update=function(){};lf.query.Delete=function(){};/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
lf.Order={DESC:0,ASC:1};/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
lf.proc.PhysicalQueryPlanNode=function(){goog.structs.TreeNode.call(this,"","")};goog.inherits(lf.proc.PhysicalQueryPlanNode,goog.structs.TreeNode);lf.proc.PhysicalQueryPlanNode.prototype.getScope=function(){return null};lf.proc.PhysicalQueryPlanNode.prototype.exec=function(a){return Promise.resolve(lf.proc.Relation.createEmpty())};lf.proc.PhysicalQueryPlanNode.prototype.toString=function(){return"dummy_node"};/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
lf.query.SelectContext=function(){this.currentVersion=0};lf.query.SelectContext.orderByToString=function(a){var b="";a.forEach(function(c,d){b+=c.column.getNormalizedName();d>a.length-1&&(b+=", ")});return b};/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
lf.proc.PhysicalQueryPlan=function(a){this.rootNode_=a};lf.proc.PhysicalQueryPlan.prototype.getRoot=function(){return this.rootNode_};lf.proc.PhysicalQueryPlan.prototype.explain=function(){return"plan description"};lf.proc.PhysicalQueryPlan.prototype.getScope=function(){var a=new goog.structs.Set,b=function(c){var d=c.getScope();d&&a.add(d);c.getChildren().forEach(function(a){b(a)})};b(this.rootNode_);return a.getValues()};
lf.proc.PhysicalQueryPlan.getCombinedScope=function(a){var b=new goog.structs.Set;a.forEach(function(a){b.addAll(a.getScope())});return b};lf.proc.UpdateStep=function(a,b){lf.proc.PhysicalQueryPlanNode.call(this);this.table_=a;this.updates_=b};goog.inherits(lf.proc.UpdateStep,lf.proc.PhysicalQueryPlanNode);lf.proc.UpdateStep.prototype.toString=function(){return"update("+this.table_.getName()+")"};lf.proc.UpdateStep.prototype.getScope=function(){return this.table_};
lf.proc.UpdateStep.prototype.exec=function(a){return this.getChildAt(0).exec(a).then(goog.bind(function(b){b=b.entries.map(function(a){this.updates_.forEach(function(b){a.row.payload()[b.column.getName()]=b.value},this);return a.row},this);a.update(this.table_,b);return goog.Promise.resolve(lf.proc.Relation.createEmpty())},this))};lf.proc.DeleteStep=function(a){lf.proc.PhysicalQueryPlanNode.call(this);this.table_=a};goog.inherits(lf.proc.DeleteStep,lf.proc.PhysicalQueryPlanNode);
lf.proc.DeleteStep.prototype.toString=function(){return"delete("+this.table_.getName()+")"};lf.proc.DeleteStep.prototype.getScope=function(){return this.table_};lf.proc.DeleteStep.prototype.exec=function(a){return this.getChildAt(0).exec(a).then(goog.bind(function(b){b=b.entries.map(function(a){return a.row});a.remove(this.table_,b);return goog.Promise.resolve(lf.proc.Relation.createEmpty())},this))};lf.proc.TableAccessFullStep=function(a){lf.proc.PhysicalQueryPlanNode.call(this);this.table=a};
goog.inherits(lf.proc.TableAccessFullStep,lf.proc.PhysicalQueryPlanNode);lf.proc.TableAccessFullStep.prototype.toString=function(){return"table_access("+this.table.getName()+")"};lf.proc.TableAccessFullStep.prototype.getScope=function(){return this.table};lf.proc.TableAccessFullStep.prototype.exec=function(a){var b=this.table.getName();return goog.Promise.resolve(lf.proc.Relation.fromRows(a.getTableRows(b),[b]))};
lf.proc.TableAccessByRowIdStep=function(a){lf.proc.PhysicalQueryPlanNode.call(this);this.table_=a};goog.inherits(lf.proc.TableAccessByRowIdStep,lf.proc.PhysicalQueryPlanNode);lf.proc.TableAccessByRowIdStep.prototype.toString=function(){return"table_access_by_row_id("+this.table_.getName()+")"};lf.proc.TableAccessByRowIdStep.prototype.getScope=function(){return this.table_};
lf.proc.TableAccessByRowIdStep.prototype.exec=function(a){return this.getChildAt(0).exec(a).then(goog.bind(function(b){var c=this.table_.getName();return goog.Promise.resolve(lf.proc.Relation.fromRows(a.getTableRows(c,b.getRowIds()),[c]))},this))};lf.proc.IndexRangeScanStep=function(a,b){lf.proc.PhysicalQueryPlanNode.call(this);this.index_=a;this.keyRanges_=b};goog.inherits(lf.proc.IndexRangeScanStep,lf.proc.PhysicalQueryPlanNode);
lf.proc.IndexRangeScanStep.prototype.toString=function(){return"index_range_scan("+this.index_.getNormalizedName()+", "+this.keyRanges_.toString()+")"};lf.proc.IndexRangeScanStep.prototype.exec=function(a){a=a.getIndexRange(this.index_,this.keyRanges_).map(function(a){return new lf.Row(a,{})},this);return goog.Promise.resolve(lf.proc.Relation.fromRows(a,[this.index_.tableName]))};lf.proc.SelectStep=function(a){lf.proc.PhysicalQueryPlanNode.call(this);this.predicate=a};
goog.inherits(lf.proc.SelectStep,lf.proc.PhysicalQueryPlanNode);lf.proc.SelectStep.prototype.toString=function(){return"select("+this.predicate.toString()+")"};lf.proc.SelectStep.prototype.exec=function(a){return this.getChildAt(0).exec(a).then(goog.bind(function(a){return this.predicate.eval(a)},this))};lf.proc.OrderByStep=function(a){lf.proc.PhysicalQueryPlanNode.call(this);this.orderBy=a};goog.inherits(lf.proc.OrderByStep,lf.proc.PhysicalQueryPlanNode);
lf.proc.OrderByStep.prototype.toString=function(){return"order_by("+lf.query.SelectContext.orderByToString(this.orderBy)+")"};lf.proc.OrderByStep.prototype.exec=function(a){return this.getChildAt(0).exec(a).then(goog.bind(function(a){var c=a.isPrefixApplied();a.entries.sort(this.comparatorFn_.bind(this,c));return a},this))};
lf.proc.OrderByStep.prototype.comparatorFn_=function(a,b,c){var d=a=null,e=null,f=-1;do f++,d=this.orderBy[f].column,e=this.orderBy[f].order,a=b.getField(d),d=c.getField(d);while(a==d&&f+1<this.orderBy.length);return a<d?e==lf.Order.ASC?-1:1:a>d?e==lf.Order.ASC?1:-1:0};/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
lf.TransactionType={READ_ONLY:0,READ_WRITE:1};lf.Transaction=function(){};/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
lf.cache={};lf.cache.TableDiff=function(){this.added_=new goog.structs.Map;this.modified_=new goog.structs.Map;this.deleted_=new goog.structs.Map};lf.cache.TableDiff.prototype.getAdded=function(){return this.added_};lf.cache.TableDiff.prototype.getModified=function(){return this.modified_};lf.cache.TableDiff.prototype.getDeleted=function(){return this.deleted_};
lf.cache.TableDiff.prototype.add=function(a){if(this.deleted_.containsKey(a.id())){var b=[this.deleted_.get(a.id()),a];this.modified_.set(a.id(),b);this.deleted_.remove(a.id())}else this.added_.set(a.id(),a)};
lf.cache.TableDiff.prototype.modify=function(a){var b=a[0],c=a[1];goog.asserts.assert(b.id()==c.id(),"Row ID mismatch between old/new values.");b=b.id();this.added_.containsKey(b)?this.added_.set(b,c):(this.modified_.containsKey(b)&&(a=[this.modified_.get(a[0].id())[0],c]),this.modified_.set(b,a))};
lf.cache.TableDiff.prototype.delete=function(a){if(this.added_.containsKey(a.id()))this.added_.remove(a.id());else if(this.modified_.containsKey(a.id())){var b=this.modified_.get(a.id())[0];this.modified_.remove(a.id());this.deleted_.set(a.id(),b)}else this.deleted_.set(a.id(),a)};lf.cache.TableDiff.prototype.merge=function(a){a.added_.forEach(function(a,c){this.add(a)},this);a.modified_.forEach(function(a,c){this.modify(a)},this);a.deleted_.getValues().forEach(function(a){this.delete(a)},this)};
lf.cache.TableDiff.prototype.getAsModifications=function(){var a=[];this.added_.getValues().forEach(function(b){a.push([null,b])},this);this.modified_.getValues().forEach(function(b){a.push(b)},this);this.deleted_.getValues().forEach(function(b){a.push([b,null])},this);return a};lf.cache.TableDiff.prototype.toString=function(){return"["+this.added_.getKeys().toString()+"], ["+this.modified_.getKeys().toString()+"], ["+this.deleted_.getKeys().toString()+"]"};
lf.cache.TableDiff.prototype.getReverse=function(){var a=new lf.cache.TableDiff;this.added_.getValues().forEach(function(b){a.delete(b)},this);this.deleted_.getValues().forEach(function(b){a.add(b)},this);this.modified_.getValues().forEach(function(b){a.modify([b[1],b[0]])},this);return a};/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
lf.cache.ConstraintChecker=function(){this.indexStore_=lf.Global.get().getService(lf.service.INDEX_STORE)};lf.cache.ConstraintChecker.prototype.findExistingRowIdInPkIndex=function(a,b){var c=a.getConstraint().getPrimaryKey();return goog.isNull(c)?null:this.findExistingRowIdInIndex_(c,b)};lf.cache.ConstraintChecker.prototype.findExistingRowIdInIndex_=function(a,b){var c=a.getNormalizedName(),d=b.keyOfIndex(c),c=this.indexStore_.get(c).get(d);return 0==c.length?null:c[0]};
lf.cache.ConstraintChecker.prototype.checkNotNullable=function(a,b){var c=a.getConstraint().getNotNullable();b.forEach(function(a){c.forEach(function(b){if(goog.isNull(a.payload()[b.getName()]))throw new lf.Exception(lf.Exception.Type.CONSTRAINT,"Attempted to insert NULL value to non-nullable field "+b.getNormalizedName());},this)},this)};/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
lf.cache.Journal=function(a){this.scope_=new goog.structs.Map;a.forEach(function(a){this.scope_.set(a.getName(),a)},this);this.cache_=lf.Global.get().getService(lf.service.CACHE);this.indexStore_=lf.Global.get().getService(lf.service.INDEX_STORE);this.contstraintChecker_=new lf.cache.ConstraintChecker;this.pendingRollback_=this.terminated_=!1;this.tableDiffs_=new goog.structs.Map};lf.cache.Journal.prototype.getDiff=function(){return this.tableDiffs_};lf.cache.Journal.prototype.getScope=function(){return this.scope_};
lf.cache.Journal.prototype.getIndexRange=function(a,b){var c=new goog.structs.Set,d=this.indexStore_.get(a.getNormalizedName());b.forEach(function(a){c.addAll(d.getRange(a))},this);return c.getValues()};lf.cache.Journal.prototype.getTableRows=function(a,b){var c=goog.isDefAndNotNull(b)?b:this.indexStore_.getRowIdIndex(a).getRange();return this.cache_.get(c)};
lf.cache.Journal.prototype.insert=function(a,b){this.assertJournalWritable_();this.checkScope_(a);this.contstraintChecker_.checkNotNullable(a,b);for(var c=0;c<b.length;c++)this.modifyRow_(a,null,b[c])};
lf.cache.Journal.prototype.modifyRow_=function(a,b,c){var d=a.getName(),e=this.tableDiffs_.get(d,null)||new lf.cache.TableDiff;this.tableDiffs_.set(d,e);var f=[b,c];try{this.updateTableIndicesForRow_(a,f)}catch(g){throw this.pendingRollback_=!0,g;}goog.isNull(b)&&!goog.isNull(c)?(this.cache_.set(d,[c]),e.add(c)):goog.isNull(b)||goog.isNull(c)?!goog.isNull(b)&&goog.isNull(c)&&(this.cache_.remove(d,[b.id()]),e.delete(b)):(this.cache_.set(d,[c]),e.modify(f))};
lf.cache.Journal.prototype.update=function(a,b){this.assertJournalWritable_();this.checkScope_(a);this.contstraintChecker_.checkNotNullable(a,b);for(var c=0;c<b.length;c++){var d=b[c],e=this.cache_.get([d.id()])[0];this.modifyRow_(a,e,d)}};
lf.cache.Journal.prototype.insertOrReplace=function(a,b){this.assertJournalWritable_();this.checkScope_(a);this.contstraintChecker_.checkNotNullable(a,b);for(var c=0;c<b.length;c++){var d=b[c],e=null,f=this.contstraintChecker_.findExistingRowIdInPkIndex(a,d);goog.isDefAndNotNull(f)&&(e=this.cache_.get([f])[0],d.assignRowId(f));this.modifyRow_(a,e,d)}};
lf.cache.Journal.prototype.remove=function(a,b){this.assertJournalWritable_();this.checkScope_(a);for(var c=0;c<b.length;c++)this.modifyRow_(a,b[c],null)};lf.cache.Journal.prototype.commit=function(){this.assertJournalWritable_();this.terminated_=!0};lf.cache.Journal.prototype.assertJournalWritable_=function(){goog.asserts.assert(!this.pendingRollback_,"Attemptted to use journal that needs to be rolled back.");goog.asserts.assert(!this.terminated_,"Attemptted to commit a terminated journal.")};
lf.cache.Journal.prototype.rollback=function(){goog.asserts.assert(!this.terminated_,"Attempted to rollback a terminated journal.");this.tableDiffs_.forEach(function(a,b){var c=this.scope_.get(b),d=a.getReverse();this.updateTableIndices_(c,d);this.updateCache_(b,d)},this);this.terminated_=!0;this.pendingRollback_=!1};
lf.cache.Journal.prototype.updateCache_=function(a,b){b.getDeleted().getValues().forEach(function(b){this.cache_.remove(a,[b.id()])},this);b.getAdded().forEach(function(b,d){this.cache_.set(a,[b])},this);b.getModified().forEach(function(b,d){this.cache_.set(a,[b[1]])},this)};lf.cache.Journal.prototype.updateTableIndices_=function(a,b){b.getAsModifications().forEach(function(b){this.updateTableIndicesForRow_(a,b)},this)};
lf.cache.Journal.prototype.updateTableIndicesForRow_=function(a,b){a.getIndices().map(function(a){return this.indexStore_.get(a.getNormalizedName())},this).concat([this.indexStore_.getRowIdIndex(a.getName())]).forEach(function(a){var d=goog.isNull(b[1])?null:b[1].keyOfIndex(a.getName()),e=goog.isNull(b[0])?null:b[0].keyOfIndex(a.getName());d!=e&&(goog.isNull(e)&&!goog.isNull(d)?a.add(d,b[1].id()):goog.isNull(e)||goog.isNull(d)?!goog.isNull(e)&&goog.isNull(d)&&a.remove(e,b[0].id()):(a.add(d,b[1].id()),
a.remove(e,b[0].id())))})};lf.cache.Journal.prototype.checkScope_=function(a){if(!this.scope_.containsKey(a.getName()))throw new lf.Exception(lf.Exception.Type.SCOPE_ERROR,a.getName()+" is not in the journal's scope.");};/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
lf.proc.Task=function(){};/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
lf.proc.QueryTask=function(a){this.backStore_=lf.Global.get().getService(lf.service.BACK_STORE);this.queries=a;var b=lf.Global.get().getService(lf.service.QUERY_ENGINE);this.plans_=this.queries.map(function(a){return b.getPlan(a)});this.combinedScope_=lf.proc.PhysicalQueryPlan.getCombinedScope(this.plans_);this.txType_=this.detectType_();this.resolver_=goog.Promise.withResolver()};
lf.proc.QueryTask.prototype.detectType_=function(){return this.queries.some(function(a){return!(a instanceof lf.query.SelectContext)})?lf.TransactionType.READ_WRITE:lf.TransactionType.READ_ONLY};
lf.proc.QueryTask.prototype.exec=function(){var a=new lf.cache.Journal(this.combinedScope_.getValues()),b=[],c=this.plans_.slice(),d=goog.bind(function(){var e=c.shift();return e?e.getRoot().exec(a).then(function(a){b.push(a);return d()}):goog.Promise.resolve()},this);return d().then(goog.bind(function(){return this.backStore_.createTx(this.txType_,a).commit()},this)).then(goog.bind(function(){this.onSuccess(b);return b},this),goog.bind(function(b){a.rollback();throw b;},this))};
lf.proc.QueryTask.prototype.getType=function(){return this.txType_};lf.proc.QueryTask.prototype.getScope=function(){return this.combinedScope_};lf.proc.QueryTask.prototype.getResolver=function(){return this.resolver_};lf.proc.QueryTask.prototype.onSuccess=function(a){};/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
lf.proc.ObserverQueryTask=function(a){lf.proc.QueryTask.call(this,a);this.observerRegistry_=lf.Global.get().getService(lf.service.OBSERVER_REGISTRY)};goog.inherits(lf.proc.ObserverQueryTask,lf.proc.QueryTask);lf.proc.ObserverQueryTask.prototype.onSuccess=function(a){this.queries.forEach(function(b,c){this.observerRegistry_.updateResultsForQuery(b,a[c])},this)};/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
lf.proc.UserQueryTask=function(a){lf.proc.QueryTask.call(this,a);this.runner_=lf.Global.get().getService(lf.service.RUNNER);this.observerRegistry_=lf.Global.get().getService(lf.service.OBSERVER_REGISTRY)};goog.inherits(lf.proc.UserQueryTask,lf.proc.QueryTask);lf.proc.UserQueryTask.prototype.onSuccess=function(a){this.getType()==lf.TransactionType.READ_ONLY?this.notifyObserversDirectly_(a):this.scheduleObserverTask_()};
lf.proc.UserQueryTask.prototype.notifyObserversDirectly_=function(a){this.queries.forEach(function(b,c){b instanceof lf.query.SelectContext&&this.observerRegistry_.updateResultsForQuery(b,a[c])},this)};lf.proc.UserQueryTask.prototype.scheduleObserverTask_=function(){var a=this.observerRegistry_.getQueriesForTables(this.getScope().getValues());0!=a.length&&(a=new lf.proc.ObserverQueryTask(a),this.runner_.scheduleTask(a,!0))};/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
lf.query.BaseBuilder=function(){this.queryEngine_=lf.Global.get().getService(lf.service.QUERY_ENGINE);this.runner_=lf.Global.get().getService(lf.service.RUNNER)};lf.query.BaseBuilder.prototype.exec=function(){try{this.assertExecPreconditions()}catch(a){return goog.Promise.reject(a)}return new goog.Promise(function(a,c){var d=new lf.proc.UserQueryTask([this.query]);this.runner_.scheduleTask(d).then(function(c){a(c[0].getPayloads())},c)},this)};lf.query.BaseBuilder.prototype.explain=function(){return lf.tree.toString(this.queryEngine_.getPlan(this.query).getRoot())};
lf.query.BaseBuilder.prototype.bind=function(a){return this};lf.query.BaseBuilder.prototype.assertExecPreconditions=function(){};lf.query.BaseBuilder.prototype.getQuery=function(){return this.query};lf.query.BaseBuilder.bindValuesInSearchCondition=function(a,b){var c=a.where;goog.isDefAndNotNull(c)&&c.traverse(function(a){a instanceof lf.pred.ValuePredicate&&a.bind(b)})};/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
lf.query.UpdateBuilder=function(a){lf.query.BaseBuilder.call(this);this.query=new lf.query.UpdateContext;this.query.table=a};goog.inherits(lf.query.UpdateBuilder,lf.query.BaseBuilder);lf.query.UpdateBuilder.prototype.set=function(a,b){var c={binding:b instanceof lf.Binder?b.getIndex():-1,column:a,value:b};goog.isDefAndNotNull(this.query.set)?this.query.set.push(c):this.query.set=[c];return this};
lf.query.UpdateBuilder.prototype.where=function(a){this.assertWherePreconditions_();this.query.where=a;return this};lf.query.UpdateBuilder.prototype.assertWherePreconditions_=function(){if(goog.isDefAndNotNull(this.query.where))throw new lf.Exception(lf.Exception.Type.SYNTAX,"where() has already been called.");};
lf.query.UpdateBuilder.prototype.assertExecPreconditions=function(){lf.query.UpdateBuilder.superClass_.assertExecPreconditions.call(this);if(!goog.isDefAndNotNull(this.query.set))throw new lf.Exception(lf.Exception.Type.SYNTAX,"Invalid usage of update()");if(this.query.set.some(function(a){return a.value instanceof lf.Binder}))throw new lf.Exception(lf.Exception.Type.SYNTAX,"Update set value not bound");};
lf.query.UpdateBuilder.prototype.bind=function(a){lf.query.BaseBuilder.bindValuesInSearchCondition(this.query,a);this.query.set.forEach(function(b){-1!=b.binding&&(b.value=a[b.binding])});return this};/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
lf.query.InsertContext=function(){this.allowReplace=!1};/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
lf.query.InsertBuilder=function(a){lf.query.BaseBuilder.call(this);this.query=new lf.query.InsertContext;this.query.allowReplace=a||!1};goog.inherits(lf.query.InsertBuilder,lf.query.BaseBuilder);
lf.query.InsertBuilder.prototype.assertExecPreconditions=function(){lf.query.InsertBuilder.superClass_.assertExecPreconditions.call(this);if(!goog.isDefAndNotNull(this.query.into)||!goog.isDefAndNotNull(this.query.values))throw new lf.Exception(lf.Exception.Type.SYNTAX,"Invalid usage of insert()");if(this.query.allowReplace&&goog.isNull(this.query.into.getConstraint().getPrimaryKey()))throw new lf.Exception(lf.Exception.Type.SYNTAX,"Attemted to insert or replace in a table with no primary key.");
};lf.query.InsertBuilder.prototype.into=function(a){this.assertIntoPreconditions_();this.query.into=a;return this};lf.query.InsertBuilder.prototype.values=function(a){this.assertValuesPreconditions_();this.query.values=a;return this};lf.query.InsertBuilder.prototype.assertIntoPreconditions_=function(){if(goog.isDefAndNotNull(this.query.into))throw new lf.Exception(lf.Exception.Type.SYNTAX,"into() has already been called.");};
lf.query.InsertBuilder.prototype.assertValuesPreconditions_=function(){if(goog.isDefAndNotNull(this.query.values))throw new lf.Exception(lf.Exception.Type.SYNTAX,"values() has already been called.");};movie.db.Transaction=function(){this.completed_=!1};
movie.db.Transaction.prototype.exec=function(a){if(this.completed_)throw new lf.Exception(lf.Exception.Type.TRANSACTION,"Transaction already commited/failed");var b=[];try{a.forEach(function(a){a.assertExecPreconditions();a=a.getQuery();b.push(a)},this)}catch(c){return this.completed_=!0,goog.Promise.reject(c)}a=lf.Global.get().getService(lf.service.RUNNER);var d=new lf.proc.UserQueryTask(b);return a.scheduleTask(d).then(goog.bind(function(a){this.completed_=!0;return a.map(function(a){return a.getPayloads()})},
this),goog.bind(function(a){this.completed_=!0;throw a;},this))};/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
lf.ObserverRegistry=function(){this.entries_=new goog.structs.Map};lf.ObserverRegistry.prototype.getQueryId_=function(a){return goog.getUid(a).toString()};lf.ObserverRegistry.prototype.addObserver=function(a,b){var c=a.getQuery(),d=this.getQueryId_(c),e=this.entries_.get(d,null);goog.isNull(e)&&(e=new lf.ObserverRegistry.Entry_(c),this.entries_.set(d,e));e.addObserver(b)};
lf.ObserverRegistry.prototype.removeObserver=function(a,b){var c=a.getQuery(),c=this.getQueryId_(c),d=this.entries_.get(c,null);goog.asserts.assert(goog.isDefAndNotNull(d),"Attempted to unobserve a query that was not observed.");var e=d.removeObserver(b);goog.asserts.assert(e,"removeObserver: Inconsistent state detected.");d.hasObservers()||this.entries_.remove(c)};
lf.ObserverRegistry.prototype.getQueriesForTables=function(a){var b=new goog.structs.Set;a.forEach(function(a){b.add(a.getName())});var c=[];this.entries_.getValues().forEach(function(a){a=a.getQuery();a.from.some(function(a){return b.contains(a.getName())})&&c.push(a)});return c};lf.ObserverRegistry.prototype.updateResultsForQuery=function(a,b){var c=this.getQueryId_(a),c=this.entries_.get(c,null);return goog.isNull(c)||c.lastResultVersion_==a.currentVersion?!1:(c.updateResults(b),!0)};
lf.ObserverRegistry.Entry_=function(a){this.query_=a;this.observers_=new goog.structs.Set;this.observableResults_=[];this.lastResultVersion_=-1};lf.ObserverRegistry.Entry_.prototype.addObserver=function(a){this.observers_.contains(a)?goog.asserts.fail("Attempted to register observer twice."):(Array.observe(this.observableResults_,a),this.observers_.add(a))};lf.ObserverRegistry.Entry_.prototype.removeObserver=function(a){Array.unobserve(this.observableResults_,a);return this.observers_.remove(a)};
lf.ObserverRegistry.Entry_.prototype.getResult=function(){return this.observableResults_};lf.ObserverRegistry.Entry_.prototype.getQuery=function(){return this.query_};lf.ObserverRegistry.Entry_.prototype.hasObservers=function(){return 0<this.observers_.getCount()};lf.ObserverRegistry.Entry_.prototype.updateResults=function(a){lf.ObserverRegistry.Entry_.applyDiff_(this.query_.columns,this.observableResults_,a);this.lastResultVersion_=this.query_.currentVersion};
lf.ObserverRegistry.Entry_.applyDiff_=function(a,b,c){for(a=b.length=0;a<c.entries.length;a++)b.push(c.entries[a].row.payload())};/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
lf.proc.LogicalQueryPlanNode=function(){goog.structs.TreeNode.call(this,"","")};goog.inherits(lf.proc.LogicalQueryPlanNode,goog.structs.TreeNode);lf.proc.InsertNode=function(a,b){lf.proc.LogicalQueryPlanNode.call(this);this.table=a;this.values=b};goog.inherits(lf.proc.InsertNode,lf.proc.LogicalQueryPlanNode);lf.proc.InsertOrReplaceNode=function(a,b){lf.proc.InsertNode.call(this,a,b)};goog.inherits(lf.proc.InsertOrReplaceNode,lf.proc.InsertNode);
lf.proc.DeleteNode=function(a){lf.proc.LogicalQueryPlanNode.call(this);this.table=a};goog.inherits(lf.proc.DeleteNode,lf.proc.LogicalQueryPlanNode);lf.proc.DeleteNode.prototype.toString=function(){return"delete("+this.table.getName()+")"};lf.proc.UpdateNode=function(a,b){lf.proc.LogicalQueryPlanNode.call(this);this.table=a;this.updates=b};goog.inherits(lf.proc.UpdateNode,lf.proc.LogicalQueryPlanNode);
lf.proc.UpdateNode.prototype.toString=function(){var a=[];this.updates&&(a=this.updates.map(function(a){return a.column.getName()},this));return"update("+this.table.getName()+", ["+a.join(",")+"])"};lf.proc.SelectNode=function(a){lf.proc.LogicalQueryPlanNode.call(this);this.predicate=a};goog.inherits(lf.proc.SelectNode,lf.proc.LogicalQueryPlanNode);lf.proc.SelectNode.prototype.toString=function(){return"select("+this.predicate.toString()+")"};
lf.proc.TableAccessNode=function(a){lf.proc.LogicalQueryPlanNode.call(this);this.table=a};goog.inherits(lf.proc.TableAccessNode,lf.proc.LogicalQueryPlanNode);lf.proc.TableAccessNode.prototype.toString=function(){return"table_access("+this.table.getName()+")"};lf.proc.CrossProductNode=function(){lf.proc.LogicalQueryPlanNode.call(this)};goog.inherits(lf.proc.CrossProductNode,lf.proc.LogicalQueryPlanNode);lf.proc.CrossProductNode.prototype.toString=function(){return"cross_product"};
lf.proc.ProjectNode=function(a,b){lf.proc.LogicalQueryPlanNode.call(this);this.columns=a;this.groupByColumn=b};goog.inherits(lf.proc.ProjectNode,lf.proc.LogicalQueryPlanNode);lf.proc.ProjectNode.prototype.toString=function(){var a="project("+this.columns.toString();goog.isNull(this.groupByColumn)||(a+=", groupBy("+this.groupByColumn.getNormalizedName()+")");return a+")"};lf.proc.OrderByNode=function(a){lf.proc.LogicalQueryPlanNode.call(this);this.orderBy=a};goog.inherits(lf.proc.OrderByNode,lf.proc.LogicalQueryPlanNode);
lf.proc.OrderByNode.prototype.toString=function(){return"order_by("+lf.query.SelectContext.orderByToString(this.orderBy)+")"};lf.proc.LimitNode=function(a){lf.proc.LogicalQueryPlanNode.call(this);this.limit=a};goog.inherits(lf.proc.LimitNode,lf.proc.LogicalQueryPlanNode);lf.proc.LimitNode.prototype.toString=function(){return"limit("+this.limit+")"};lf.proc.SkipNode=function(a){lf.proc.LogicalQueryPlanNode.call(this);this.skip=a};goog.inherits(lf.proc.SkipNode,lf.proc.LogicalQueryPlanNode);
lf.proc.SkipNode.prototype.toString=function(){return"skip("+this.skip+")"};lf.proc.JoinNode=function(a){lf.proc.LogicalQueryPlanNode.call(this);this.predicate=a};goog.inherits(lf.proc.JoinNode,lf.proc.LogicalQueryPlanNode);lf.proc.JoinNode.prototype.toString=function(){return"join("+this.predicate.toString()+")"};/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
lf.proc.SkipStep=function(a){lf.proc.PhysicalQueryPlanNode.call(this);this.skip=a};goog.inherits(lf.proc.SkipStep,lf.proc.PhysicalQueryPlanNode);lf.proc.SkipStep.prototype.toString=function(){return"skip("+this.skip+")"};lf.proc.SkipStep.prototype.exec=function(a){goog.asserts.assert(1==this.getChildCount(),"SkipStep should have exactly one child.");return this.getChildAt(0).exec(a).then(goog.bind(function(a){return new lf.proc.Relation(a.entries.slice(this.skip),a.getTables())},this))};/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
lf.proc.CrossProductStep=function(){lf.proc.PhysicalQueryPlanNode.call(this)};goog.inherits(lf.proc.CrossProductStep,lf.proc.PhysicalQueryPlanNode);lf.proc.CrossProductStep.prototype.toString=function(){return"cross_product"};
lf.proc.CrossProductStep.prototype.exec=function(a){goog.asserts.assert(2==this.getChildCount(),"Only cross-products of 2 relations are currently supported.");var b=this.getChildren().map(function(b){return b.exec(a)});return goog.Promise.all(b).then(goog.bind(function(a){return lf.proc.CrossProductStep.crossProduct_(a[0],a[1])},this))};
lf.proc.CrossProductStep.crossProduct_=function(a,b){for(var c=[],d=a.getTables(),e=b.getTables(),f=0;f<a.entries.length;f++)for(var g=0;g<b.entries.length;g++){var h=lf.proc.RelationEntry.combineEntries(a.entries[f],d,b.entries[g],e);c.push(h)}d=a.getTables().concat(b.getTables());return new lf.proc.Relation(c,d)};/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
lf.proc.PhysicalPlanRewriter=function(a,b){this.rootNode_=a;this.rewritePasses_=b};lf.proc.PhysicalPlanRewriter.prototype.generate=function(){this.rewritePasses_.forEach(function(a){this.rootNode_=a.rewrite(this.rootNode_)},this);return this.rootNode_};/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
lf.proc.JoinStep=function(a){lf.proc.PhysicalQueryPlanNode.call(this);this.predicate_=a};goog.inherits(lf.proc.JoinStep,lf.proc.PhysicalQueryPlanNode);lf.proc.JoinStep.prototype.toString=function(){return"join("+this.predicate_.toString()+")"};
lf.proc.JoinStep.prototype.exec=function(a){goog.asserts.assert(2==this.getChildCount(),"Join step must have exactly 2 children.");var b=this.getChildren().map(function(b){return b.exec(a)});return goog.Promise.all(b).then(goog.bind(function(a){return this.predicate_.evalRelations(a[0],a[1])},this))};/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
lf.proc.LimitStep=function(a){lf.proc.PhysicalQueryPlanNode.call(this);this.limit=a};goog.inherits(lf.proc.LimitStep,lf.proc.PhysicalQueryPlanNode);lf.proc.LimitStep.prototype.toString=function(){return"limit("+this.limit+")"};lf.proc.LimitStep.prototype.exec=function(a){goog.asserts.assert(1==this.getChildCount(),"LimitStep should have exactly one child.");return this.getChildAt(0).exec(a).then(goog.bind(function(a){a.entries.splice(this.limit);return a},this))};/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
lf.proc.RewritePass=function(){};/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
lf.proc.IndexRangeScanPass=function(){lf.proc.RewritePass.call(this);this.indexStore_=lf.Global.get().getService(lf.service.INDEX_STORE)};goog.inherits(lf.proc.IndexRangeScanPass,lf.proc.RewritePass);
lf.proc.IndexRangeScanPass.prototype.rewrite=function(a){this.rootNode=a;this.findTableAccessFullSteps_().forEach(function(a){var c=this.findSelectStepCandidates_(a);0!=c.length&&(c=this.chooseSelectStep_(c),a=lf.proc.IndexRangeScanPass.replaceWithIndexRangeScanStep_(c,a),c==this.rootNode&&(this.rootNode=a.getRoot()))},this);return this.rootNode};
lf.proc.IndexRangeScanPass.prototype.findTableAccessFullSteps_=function(){var a=[];lf.proc.IndexRangeScanPass.findTableAccessFullStepsRec_(this.rootNode,a);return a};lf.proc.IndexRangeScanPass.findTableAccessFullStepsRec_=function(a,b){a instanceof lf.proc.TableAccessFullStep&&b.push(a);a.getChildren().forEach(function(a){lf.proc.IndexRangeScanPass.findTableAccessFullStepsRec_(a,b)})};
lf.proc.IndexRangeScanPass.prototype.findSelectStepCandidates_=function(a){for(var b=[],c=a.getParent();c;)lf.proc.IndexRangeScanPass.isCandidate_(c,a)&&b.push(c),c=c.getParent();return b};
lf.proc.IndexRangeScanPass.prototype.chooseSelectStep_=function(a){goog.asserts.assert(0<a.length);if(1==a.length)return a[0];var b=null,c=null;a.forEach(function(a,e){var f=a.predicate,g=lf.proc.IndexRangeScanPass.getIndexForPredicate_(f),h=this.indexStore_.get(g.getNormalizedName()),f=f.toKeyRange().reduce(function(a,b){return a+h.cost(b)},0);if(goog.isNull(c)||f<c)c=f,b=a},this);return b};
lf.proc.IndexRangeScanPass.isCandidate_=function(a,b){return a instanceof lf.proc.SelectStep&&a.predicate instanceof lf.pred.ValuePredicate&&a.predicate.isKeyRangeCompatible()?a.predicate.column.getTable()==b.table?0<a.predicate.column.getIndices().length:!1:!1};lf.proc.IndexRangeScanPass.getIndexForPredicate_=function(a){a=a.column.getIndices();return goog.array.find(a,function(a){return 1==a.columnNames.length})};
lf.proc.IndexRangeScanPass.replaceWithIndexRangeScanStep_=function(a,b){var c=a.predicate,d=lf.proc.IndexRangeScanPass.getIndexForPredicate_(c);if(goog.isNull(d))return a;c=new lf.proc.IndexRangeScanStep(d,c.toKeyRange());d=new lf.proc.TableAccessByRowIdStep(b.table);d.addChild(c);var e=b.getParent();if(e!=a){lf.tree.removeNode(a);var f=e.getChildren().indexOf(b);e.removeChildAt(f);a.addChild(b);e.addChildAt(a,f);goog.asserts.assert(1==a.getChildCount(),"SelectStep should have exactly one child")}return lf.tree.replaceChainWithChain(a,
b,d,c)};/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
lf.fn={};lf.fn.AggregatedColumn=function(a,b){this.child=a;this.aggregatorType=b;this.alias_=null};lf.fn.AggregatedColumn.prototype.getName=function(){return this.aggregatorType+"("+this.child.getName()+")"};lf.fn.AggregatedColumn.prototype.getNormalizedName=function(){return this.aggregatorType+"("+this.child.getNormalizedName()+")"};lf.fn.AggregatedColumn.prototype.getTable=function(){return this.child.getTable()};lf.fn.AggregatedColumn.prototype.toString=function(){return this.getNormalizedName()};
lf.fn.AggregatedColumn.prototype.getType=function(){return this.child.getType()};lf.fn.AggregatedColumn.prototype.getAlias=function(){return this.alias_};lf.fn.AggregatedColumn.prototype.as=function(a){this.alias_=a;return this};lf.fn.AggregatedColumn.prototype.getColumnChain=function(){for(var a=[this],b=this;b instanceof lf.fn.AggregatedColumn;)a.push(b.child),b=b.child;return a};/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
lf.fn.Type={AVG:"avg",COUNT:"count",DISTINCT:"distinct",MAX:"max",MIN:"min",STDDEV:"stddev",SUM:"sum"};lf.fn.avg=function(a){return new lf.fn.AggregatedColumn(a,lf.fn.Type.AVG)};lf.fn.count=function(a){return new lf.fn.AggregatedColumn(a,lf.fn.Type.COUNT)};lf.fn.distinct=function(a){return new lf.fn.AggregatedColumn(a,lf.fn.Type.DISTINCT)};lf.fn.max=function(a){return new lf.fn.AggregatedColumn(a,lf.fn.Type.MAX)};lf.fn.min=function(a){return new lf.fn.AggregatedColumn(a,lf.fn.Type.MIN)};
lf.fn.stddev=function(a){return new lf.fn.AggregatedColumn(a,lf.fn.Type.STDDEV)};lf.fn.sum=function(a){return new lf.fn.AggregatedColumn(a,lf.fn.Type.SUM)};/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
lf.proc.RelationTransformer=function(a,b){this.relation_=a;this.columns_=b};lf.proc.RelationTransformer.prototype.getTransformed=function(){var a=this.calculateAggregators_();return this.columns_.some(function(a){return a instanceof lf.fn.AggregatedColumn},this)?this.handleAggregatedColumns_(a):this.handleNonAggregatedColumns_()};
lf.proc.RelationTransformer.prototype.handleAggregatedColumns_=function(a){if(1==this.columns_.length&&this.columns_[0].aggregatorType==lf.fn.Type.DISTINCT){var b=a.get(this.columns_[0].getNormalizedName(),null).entries.map(function(a){var b=new lf.proc.RelationEntry(new lf.Row(lf.Row.DUMMY_ID,{}),this.relation_.isPrefixApplied());b.setField(this.columns_[0],a.getField(this.columns_[0].child));return b},this);return new lf.proc.Relation(b,[])}var c=new lf.proc.RelationEntry(new lf.Row(lf.Row.DUMMY_ID,
{}),this.relation_.isPrefixApplied());this.columns_.forEach(function(b){var e=b instanceof lf.fn.AggregatedColumn?a.get(b.getNormalizedName(),null):this.relation_.entries[0].getField(b);c.setField(b,e)},this);return new lf.proc.Relation([c],this.relation_.getTables())};
lf.proc.RelationTransformer.prototype.handleNonAggregatedColumns_=function(){var a=Array(this.relation_.entries.length),b=this.relation_.isPrefixApplied();this.relation_.entries.forEach(function(c,d){a[d]=new lf.proc.RelationEntry(new lf.Row(c.row.id(),{}),b);this.columns_.forEach(function(b){a[d].setField(b,c.getField(b))},this)},this);return new lf.proc.Relation(a,this.relation_.getTables())};
lf.proc.RelationTransformer.prototype.calculateAggregators_=function(){var a=new goog.structs.Map;this.columns_.forEach(function(b){if(b instanceof lf.fn.AggregatedColumn){b=b.getColumnChain().reverse();for(var c=1;c<b.length;c++){var d=b[c],e=d.getColumnChain().slice(-1)[0],f=this.getInputRelationFor_(d,a),e=lf.proc.RelationTransformer.evalAggregation_(d.aggregatorType,f,e);a.set(d.getNormalizedName(),e)}}},this);return a};
lf.proc.RelationTransformer.prototype.getInputRelationFor_=function(a,b){if(a.child instanceof lf.fn.AggregatedColumn){var c=b.get(a.child.getNormalizedName(),null);goog.asserts.assert(!goog.isNull(c),"Could not find input relation for "+a.getNormalizedName());return c}return this.relation_};
lf.proc.RelationTransformer.evalAggregation_=function(a,b,c){var d=null;switch(a){case lf.fn.Type.MIN:d=lf.proc.RelationTransformer.min_(b,c);break;case lf.fn.Type.MAX:d=lf.proc.RelationTransformer.max_(b,c);break;case lf.fn.Type.DISTINCT:d=lf.proc.RelationTransformer.distinct_(b,c);break;case lf.fn.Type.COUNT:d=b.entries.length;break;case lf.fn.Type.SUM:d=lf.proc.RelationTransformer.sum_(b,c);break;case lf.fn.Type.AVG:d=lf.proc.RelationTransformer.sum_(b,c)/b.entries.length;break;default:d=lf.proc.RelationTransformer.stddev_(b,
c)}return d};lf.proc.RelationTransformer.min_=function(a,b){var c=null;a.entries.forEach(function(a){a=a.getField(b);if(goog.isNull(c)||a<c)c=a});return c};lf.proc.RelationTransformer.max_=function(a,b){var c=null;a.entries.forEach(function(a){a=a.getField(b);if(goog.isNull(c)||a>c)c=a});return c};lf.proc.RelationTransformer.sum_=function(a,b){return a.entries.reduce(function(a,d){return a+d.getField(b)},0)};
lf.proc.RelationTransformer.stddev_=function(a,b){var c=a.entries.map(function(a){return a.getField(b)});return goog.math.standardDeviation.apply(null,c)};lf.proc.RelationTransformer.distinct_=function(a,b){var c=new goog.structs.Map;a.entries.forEach(function(a){var e=a.getField(b);c.set(e,a)});return new lf.proc.Relation(c.getValues(),a.getTables())};
lf.proc.RelationTransformer.transformMany=function(a,b){var c=a.map(function(a){return(new lf.proc.RelationTransformer(a,b)).getTransformed().entries[0]});return new lf.proc.Relation(c,a[0].getTables())};/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
lf.proc.ProjectStep=function(a,b){lf.proc.PhysicalQueryPlanNode.call(this);this.columns=a;this.groupByColumn=b};goog.inherits(lf.proc.ProjectStep,lf.proc.PhysicalQueryPlanNode);lf.proc.ProjectStep.prototype.toString=function(){var a="project("+this.columns.toString();goog.isNull(this.groupByColumn)||(a+=", groupBy("+this.groupByColumn.getNormalizedName()+")");return a+")"};
lf.proc.ProjectStep.prototype.exec=function(a){return this.getChildAt(0).exec(a).then(goog.bind(function(a){return goog.isNull(this.groupByColumn)?this.execNonGroupByProjection_(a):this.execGroupByProjection_(a)},this))};lf.proc.ProjectStep.prototype.execGroupByProjection_=function(a){if(0==a.entries)return a;a=this.calculateGroupedRelations_(a);return lf.proc.RelationTransformer.transformMany(a,this.columns)};
lf.proc.ProjectStep.prototype.execNonGroupByProjection_=function(a){return 0==this.columns.length?a:(new lf.proc.RelationTransformer(a,this.columns)).getTransformed()};lf.proc.ProjectStep.prototype.calculateGroupedRelations_=function(a){var b=new goog.labs.structs.Multimap;a.entries.forEach(function(a){var d=a.getField(this.groupByColumn);b.add(String(d),a)},this);return b.getKeys().map(function(c){return new lf.proc.Relation(b.get(c),a.getTables())},this)};/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
lf.proc.InsertStep=function(a,b){lf.proc.PhysicalQueryPlanNode.call(this);this.values_=b;this.table_=a};goog.inherits(lf.proc.InsertStep,lf.proc.PhysicalQueryPlanNode);lf.proc.InsertStep.prototype.toString=function(){return"insert("+this.table_.getName()+")"};lf.proc.InsertStep.prototype.getScope=function(){return this.table_};lf.proc.InsertStep.prototype.exec=function(a){a.insert(this.table_,this.values_);return goog.Promise.resolve(lf.proc.Relation.createEmpty())};
lf.proc.InsertOrReplaceStep=function(a,b){lf.proc.PhysicalQueryPlanNode.call(this);this.values_=b;this.table_=a};goog.inherits(lf.proc.InsertOrReplaceStep,lf.proc.PhysicalQueryPlanNode);lf.proc.InsertOrReplaceStep.prototype.toString=function(){return"insert_replace("+this.table_.getName()+")"};lf.proc.InsertOrReplaceStep.prototype.getScope=function(){return this.table_};lf.proc.InsertOrReplaceStep.prototype.exec=function(a){a.insertOrReplace(this.table_,this.values_);return goog.Promise.resolve(lf.proc.Relation.createEmpty())};/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
lf.proc.PhysicalPlanFactory=function(){};lf.proc.PhysicalPlanFactory.prototype.create=function(a){if(a instanceof lf.proc.InsertOrReplaceNode||a instanceof lf.proc.InsertNode||a instanceof lf.proc.UpdateNode)return this.createPlan_(a);if(a instanceof lf.proc.DeleteNode||a instanceof lf.proc.ProjectNode)return this.createPlan_(a,[new lf.proc.IndexRangeScanPass]);goog.asserts.fail("Unknown query type.");a=new lf.proc.PhysicalQueryPlanNode;return new lf.proc.PhysicalQueryPlan(a)};
lf.proc.PhysicalPlanFactory.prototype.createPlan_=function(a,b){var c=lf.tree.map(a,goog.bind(this.mapFn_,this));return goog.isDefAndNotNull(b)?(c=new lf.proc.PhysicalPlanRewriter(c,b),new lf.proc.PhysicalQueryPlan(c.generate())):new lf.proc.PhysicalQueryPlan(c)};
lf.proc.PhysicalPlanFactory.prototype.mapFn_=function(a){return a instanceof lf.proc.ProjectNode?new lf.proc.ProjectStep(a.columns,a.groupByColumn):a instanceof lf.proc.OrderByNode?new lf.proc.OrderByStep(a.orderBy):a instanceof lf.proc.SkipNode?new lf.proc.SkipStep(a.skip):a instanceof lf.proc.LimitNode?new lf.proc.LimitStep(a.limit):a instanceof lf.proc.SelectNode?new lf.proc.SelectStep(a.predicate):a instanceof lf.proc.CrossProductNode?new lf.proc.CrossProductStep:a instanceof lf.proc.JoinNode?
new lf.proc.JoinStep(a.predicate):a instanceof lf.proc.TableAccessNode?new lf.proc.TableAccessFullStep(a.table):a instanceof lf.proc.DeleteNode?new lf.proc.DeleteStep(a.table):a instanceof lf.proc.UpdateNode?new lf.proc.UpdateStep(a.table,a.updates):a instanceof lf.proc.InsertOrReplaceNode?new lf.proc.InsertOrReplaceStep(a.table,a.values):a instanceof lf.proc.InsertNode?new lf.proc.InsertStep(a.table,a.values):new lf.proc.PhysicalQueryPlanNode};/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
lf.proc.LogicalPlanGenerator=function(){};lf.proc.LogicalPlanGenerator.prototype.generate=function(){};lf.proc.BaseLogicalPlanGenerator=function(a){this.query=a;this.rootNode_=null};lf.proc.BaseLogicalPlanGenerator.prototype.generate=function(){goog.isNull(this.rootNode_)&&(this.rootNode_=this.generateInternal());return this.rootNode_};lf.proc.InsertLogicalPlanGenerator=function(a){lf.proc.BaseLogicalPlanGenerator.call(this,a)};goog.inherits(lf.proc.InsertLogicalPlanGenerator,lf.proc.BaseLogicalPlanGenerator);
lf.proc.InsertLogicalPlanGenerator.prototype.generateInternal=function(){return this.query.allowReplace?new lf.proc.InsertOrReplaceNode(this.query.into,this.query.values):new lf.proc.InsertNode(this.query.into,this.query.values)};lf.proc.UpdateLogicalPlanGenerator=function(a){lf.proc.BaseLogicalPlanGenerator.call(this,a)};goog.inherits(lf.proc.UpdateLogicalPlanGenerator,lf.proc.BaseLogicalPlanGenerator);
lf.proc.UpdateLogicalPlanGenerator.prototype.generateInternal=function(){var a=new lf.proc.UpdateNode(this.query.table,this.query.set),b=goog.isDefAndNotNull(this.query.where)?new lf.proc.SelectNode(this.query.where.copy()):null,c=new lf.proc.TableAccessNode(this.query.table);goog.isNull(b)?a.addChild(c):(b.addChild(c),a.addChild(b));return a};/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
lf.query.DeleteContext=function(){};/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
lf.proc.CrossProductPass=function(){lf.proc.RewritePass.call(this)};goog.inherits(lf.proc.CrossProductPass,lf.proc.RewritePass);lf.proc.CrossProductPass.prototype.rewrite=function(a){this.rootNode=a;this.traverse_(this.rootNode);return this.rootNode};
lf.proc.CrossProductPass.prototype.traverse_=function(a){if(a instanceof lf.proc.CrossProductNode)for(;2<a.getChildCount();){for(var b=new lf.proc.CrossProductNode,c=0;2>c;c++){var d=a.removeChildAt(0);b.addChild(d)}a.addChildAt(b,0)}a.getChildren().forEach(function(a){this.traverse_(a)},this)};/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
lf.proc.AndPredicatePass=function(){lf.proc.RewritePass.call(this)};goog.inherits(lf.proc.AndPredicatePass,lf.proc.RewritePass);lf.proc.AndPredicatePass.prototype.rewrite=function(a){this.rootNode=a;this.traverse_(this.rootNode);return this.rootNode};
lf.proc.AndPredicatePass.prototype.traverse_=function(a){if(a instanceof lf.proc.SelectNode){goog.asserts.assert(1==a.getChildCount(),"SelectNode must have exactly one child.");var b=this.breakAndPredicate_(a.predicate),b=this.createSelectNodeChain_(b);lf.tree.replaceNodeWithChain(a,b[0],b[1]);a==this.rootNode&&(this.rootNode=b[0]);a=b[0]}a.getChildren().forEach(function(a){this.traverse_(a)},this)};
lf.proc.AndPredicatePass.prototype.breakAndPredicate_=function(a){if(0==a.getChildCount()||a.operator!=lf.pred.Operator.AND)return[a];var b=a.getChildren().slice().map(function(b){a.removeChild(b);return this.breakAndPredicate_(b)},this);return goog.array.flatten(b)};lf.proc.AndPredicatePass.prototype.createSelectNodeChain_=function(a){var b=null,c=null;a.map(function(a,e){var f=new lf.proc.SelectNode(a);0==e?b=f:c.addChild(f);c=f},this);return[b,c]};/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
lf.proc.ImplicitJoinsPass=function(){lf.proc.RewritePass.call(this)};goog.inherits(lf.proc.ImplicitJoinsPass,lf.proc.RewritePass);lf.proc.ImplicitJoinsPass.prototype.rewrite=function(a){this.rootNode=a;this.traverse_(this.rootNode);return this.rootNode};
lf.proc.ImplicitJoinsPass.prototype.traverse_=function(a){if(a instanceof lf.proc.SelectNode&&a.predicate instanceof lf.pred.JoinPredicate){goog.asserts.assert(1==a.getChildCount(),"SelectNode must have exactly one child.");var b=a.getChildAt(0);if(b instanceof lf.proc.CrossProductNode){var c=new lf.proc.JoinNode(a.predicate);lf.tree.replaceChainWithNode(a,b,c);a==this.rootNode&&(this.rootNode=c);a=c}}a.getChildren().forEach(function(a){this.traverse_(a)},this)};/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
lf.proc.PushDownSelectionsPass=function(){lf.proc.RewritePass.call(this);this.alreadyPushedDown_=new goog.structs.Set};goog.inherits(lf.proc.PushDownSelectionsPass,lf.proc.RewritePass);lf.proc.PushDownSelectionsPass.prototype.rewrite=function(a){this.rootNode=a;this.traverse_(this.rootNode);this.alreadyPushedDown_.clear();return this.rootNode};
lf.proc.PushDownSelectionsPass.prototype.traverse_=function(a){if(this.isCandidateNode_(a)){var b=a.predicate instanceof lf.pred.ValuePredicate?this.pushDownValuePredNodeRec_(a):this.pushDownJoinPredNodeRec_(a);this.alreadyPushedDown_.add(a);b==a&&(b=a.getChildAt(0));goog.isNull(b)||(goog.isNull(b.getParent())&&(this.rootNode=b),this.isCandidateNode_(b)&&!this.alreadyPushedDown_.contains(b)&&this.traverse_(b))}else a.getChildren().forEach(function(a){this.traverse_(a)},this)};
lf.proc.PushDownSelectionsPass.prototype.pushDownNodeRec_=function(a,b){var c=a;if(this.shouldSwapWithChild_(a))c=lf.tree.swapNodeWithChild(a),this.pushDownNodeRec_(a,b);else if(this.shouldPushBelowChild_(a)){var d=[],c=lf.tree.pushNodeBelowChild(a,b,function(a){a=new lf.proc.SelectNode(a.predicate);d.push(a);return a});d.forEach(function(a){this.pushDownNodeRec_(a,b)},this)}return c};
lf.proc.PushDownSelectionsPass.prototype.pushDownValuePredNodeRec_=function(a){var b=new goog.structs.Set([a.predicate.column.getTable().getName()]),c=function(a){return this.doesReferToTables_(a,b)}.bind(this);return this.pushDownNodeRec_(a,c)};
lf.proc.PushDownSelectionsPass.prototype.pushDownJoinPredNodeRec_=function(a){var b=new goog.structs.Set([a.predicate.leftColumn.getTable().getName(),a.predicate.rightColumn.getTable().getName()]),c=function(a){return this.doesReferToTables_(a,b)}.bind(this);return this.pushDownNodeRec_(a,c)};
lf.proc.PushDownSelectionsPass.prototype.doesReferToTables_=function(a,b){var c=new goog.structs.Set;lf.tree.getLeafNodes(a).forEach(function(a){c.add(a.table.getName())},this);a instanceof lf.proc.TableAccessNode&&c.add(a.table.getName());return c.containsAll(b)};lf.proc.PushDownSelectionsPass.prototype.isCandidateNode_=function(a){return a instanceof lf.proc.SelectNode&&!(a.predicate instanceof lf.pred.CombinedPredicate)};
lf.proc.PushDownSelectionsPass.prototype.shouldPushBelowChild_=function(a){a=a.getChildAt(0);return a instanceof lf.proc.CrossProductNode||a instanceof lf.proc.JoinNode};lf.proc.PushDownSelectionsPass.prototype.shouldSwapWithChild_=function(a){return a.getChildAt(0)instanceof lf.proc.SelectNode};/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
lf.proc.LogicalPlanRewriter=function(a,b){this.rootNode_=a;this.rewritePasses_=b};lf.proc.LogicalPlanRewriter.prototype.generate=function(){this.rewritePasses_.forEach(function(a){this.rootNode_=a.rewrite(this.rootNode_)},this);return this.rootNode_};/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
lf.proc.SelectLogicalPlanGenerator=function(a){lf.proc.BaseLogicalPlanGenerator.call(this,a);this.projectNode_=this.limitNode_=this.skipNode_=this.orderByNode_=this.selectNode_=this.crossProductNode_=this.joinNode_=this.tableAccessNodes_=null};goog.inherits(lf.proc.SelectLogicalPlanGenerator,lf.proc.BaseLogicalPlanGenerator);
lf.proc.SelectLogicalPlanGenerator.prototype.generateInternal=function(){this.generateNodes_();this.connectNodes_();var a=[new lf.proc.AndPredicatePass,new lf.proc.CrossProductPass,new lf.proc.PushDownSelectionsPass,new lf.proc.ImplicitJoinsPass];return(new lf.proc.LogicalPlanRewriter(this.projectNode_,a)).generate()};
lf.proc.SelectLogicalPlanGenerator.prototype.generateNodes_=function(){this.generateTableAcessNodes_();this.generateCrossProductNode_();this.generateJoinNode_();this.generateSelectNode_();this.generateOrderByNode_();this.generateSkipNode_();this.generateLimitNode_();this.generateProjectNode_()};
lf.proc.SelectLogicalPlanGenerator.prototype.connectNodes_=function(){var a=this.joinNode_||this.crossProductNode_||null;goog.isNull(a)||this.tableAccessNodes_.forEach(function(b){a.addChild(b)});goog.isNull(this.selectNode_)||this.selectNode_.addChild(goog.isNull(a)?this.tableAccessNodes_[0]:a);var b=this.selectNode_||a||this.tableAccessNodes_[0],c=function(a){goog.isNull(a)||(a.addChild(b),b=a)};c(this.orderByNode_);c(this.skipNode_);c(this.limitNode_);c(this.projectNode_)};
lf.proc.SelectLogicalPlanGenerator.prototype.generateTableAcessNodes_=function(){this.tableAccessNodes_=this.query.from.map(function(a){return new lf.proc.TableAccessNode(a)},this);this.query.innerJoin&&this.tableAccessNodes_.push(new lf.proc.TableAccessNode(this.query.innerJoin.table))};lf.proc.SelectLogicalPlanGenerator.prototype.generateJoinNode_=function(){this.query.innerJoin&&(this.joinNode_=new lf.proc.JoinNode(this.query.innerJoin.predicate))};
lf.proc.SelectLogicalPlanGenerator.prototype.generateCrossProductNode_=function(){2<=this.query.from.length&&(this.crossProductNode_=new lf.proc.CrossProductNode)};lf.proc.SelectLogicalPlanGenerator.prototype.generateSelectNode_=function(){this.selectNode_=goog.isDefAndNotNull(this.query.where)?new lf.proc.SelectNode(this.query.where.copy()):null};lf.proc.SelectLogicalPlanGenerator.prototype.generateOrderByNode_=function(){this.query.orderBy&&(this.orderByNode_=new lf.proc.OrderByNode(this.query.orderBy))};
lf.proc.SelectLogicalPlanGenerator.prototype.generateLimitNode_=function(){this.query.limit&&(this.limitNode_=new lf.proc.LimitNode(this.query.limit))};lf.proc.SelectLogicalPlanGenerator.prototype.generateSkipNode_=function(){this.query.skip&&(this.skipNode_=new lf.proc.SkipNode(this.query.skip))};lf.proc.SelectLogicalPlanGenerator.prototype.generateProjectNode_=function(){this.projectNode_=new lf.proc.ProjectNode(this.query.columns||[],this.query.groupBy||null)};/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
lf.proc.DeleteLogicalPlanGenerator=function(a){lf.proc.BaseLogicalPlanGenerator.call(this,a)};goog.inherits(lf.proc.DeleteLogicalPlanGenerator,lf.proc.BaseLogicalPlanGenerator);
lf.proc.DeleteLogicalPlanGenerator.prototype.generateInternal=function(){var a=new lf.proc.DeleteNode(this.query.from),b=goog.isDefAndNotNull(this.query.where)?new lf.proc.SelectNode(this.query.where.copy()):null,c=new lf.proc.TableAccessNode(this.query.from);goog.isNull(b)?a.addChild(c):(b.addChild(c),a.addChild(b));b=[new lf.proc.AndPredicatePass];return(new lf.proc.LogicalPlanRewriter(a,b)).generate()};/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
lf.proc.LogicalPlanFactory=function(){};
lf.proc.LogicalPlanFactory.prototype.create=function(a){var b=null;if(a instanceof lf.query.InsertContext)b=new lf.proc.InsertLogicalPlanGenerator(a);else if(a instanceof lf.query.DeleteContext)b=new lf.proc.DeleteLogicalPlanGenerator(a);else if(a instanceof lf.query.SelectContext)b=new lf.proc.SelectLogicalPlanGenerator(a);else if(a instanceof lf.query.UpdateContext)b=new lf.proc.UpdateLogicalPlanGenerator(a);else throw new lf.Exception(lf.Exception.Type.SYNTAX,"Unknown query context");return b.generate()};/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
lf.proc.QueryEngine=function(){};/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
lf.proc.DefaultQueryEngine=function(){this.logicalPlanFactory_=new lf.proc.LogicalPlanFactory;this.physicalPlanFactory_=new lf.proc.PhysicalPlanFactory};lf.proc.DefaultQueryEngine.prototype.getPlan=function(a){a=this.convertToLogicalPlan_(a);return this.convertToPhysicalPlan_(a)};lf.proc.DefaultQueryEngine.prototype.convertToLogicalPlan_=function(a){return this.logicalPlanFactory_.create(a)};lf.proc.DefaultQueryEngine.prototype.convertToPhysicalPlan_=function(a){return this.physicalPlanFactory_.create(a)};/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
lf.cache.Cache=function(){};/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
lf.cache.DefaultCache=function(a){this.map_=new goog.structs.Map;this.tableRows_=new goog.structs.Map;this.limit_=a||Number.MAX_VALUE};lf.cache.DefaultCache.prototype.getTableSet_=function(a){var b=this.tableRows_.get(a,null);goog.isNull(b)&&(b=new goog.structs.Set,this.tableRows_.set(a,b));return b};lf.cache.DefaultCache.prototype.set=function(a,b){var c=this.getTableSet_(a);b.forEach(goog.bind(function(a){this.map_.set(a.id(),a);c.add(a.id())},this));this.map_.getCount()};
lf.cache.DefaultCache.prototype.get=function(a){return a.map(goog.bind(function(a){return this.map_.get(a,null)},this))};
lf.cache.DefaultCache.prototype.getRange=function(a,b,c){var d=[],e=Math.min(b,c),f=Math.max(b,c);a=this.getTableSet_(a);if(a.getCount()<f-e)a.getValues().forEach(function(a){a>=e&&a<=f&&(a=this.map_.get(a),goog.asserts.assert(goog.isDefAndNotNull(a),"Inconsistent cache"),d.push(a))},this);else for(b=e;b<=f;++b)a.contains(b)&&(c=this.map_.get(b),goog.asserts.assert(goog.isDefAndNotNull(c),"Inconsistent cache"),d.push(c));return d};
lf.cache.DefaultCache.prototype.remove=function(a,b){var c=this.getTableSet_(a);b.forEach(function(a){this.map_.remove(a);c.remove(a)},this)};lf.cache.DefaultCache.prototype.getCount=function(a){return goog.isDefAndNotNull(a)?this.getTableSet_(a).getCount():this.map_.getCount()};/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
lf.backstore={};lf.backstore.Page=function(a,b){this.id_=a;this.payload_=b||{}};lf.backstore.Page.BUNDLE_EXPONENT=9;lf.backstore.Page.toPageIds=function(a){var b=new goog.structs.Set;a.forEach(function(a){b.add(lf.backstore.Page.toPageId(a))});return b.getValues()};lf.backstore.Page.toPageId=function(a){return a>>lf.backstore.Page.BUNDLE_EXPONENT};lf.backstore.Page.getPageRange=function(a){return[a<<lf.backstore.Page.BUNDLE_EXPONENT,(a+1<<lf.backstore.Page.BUNDLE_EXPONENT)-1]};
lf.backstore.Page.prototype.getId=function(){return this.id_};lf.backstore.Page.prototype.getPayload=function(){return this.payload_};lf.backstore.Page.prototype.setRows=function(a){a.forEach(function(a){this.payload_[a.id()]=a.serialize()},this)};lf.backstore.Page.prototype.removeRows=function(a){a.forEach(function(a){goog.object.remove(this.payload_,a)},this)};lf.backstore.Page.prototype.serialize=function(){return{id:this.id_,value:JSON.stringify(this.payload_)}};
lf.backstore.Page.deserialize=function(a){return new lf.backstore.Page(a.id,JSON.parse(a.value))};/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
lf.BackStore=function(){};/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
lf.Stream=function(){};goog.labs.userAgent.engine={};goog.labs.userAgent.engine.isPresto=function(){return goog.labs.userAgent.util.matchUserAgent("Presto")};goog.labs.userAgent.engine.isTrident=function(){return goog.labs.userAgent.util.matchUserAgent("Trident")||goog.labs.userAgent.util.matchUserAgent("MSIE")};goog.labs.userAgent.engine.isWebKit=function(){return goog.labs.userAgent.util.matchUserAgentIgnoreCase("WebKit")};
goog.labs.userAgent.engine.isGecko=function(){return goog.labs.userAgent.util.matchUserAgent("Gecko")&&!goog.labs.userAgent.engine.isWebKit()&&!goog.labs.userAgent.engine.isTrident()};goog.labs.userAgent.engine.getVersion=function(){var a=goog.labs.userAgent.util.getUserAgent();if(a){var a=goog.labs.userAgent.util.extractVersionTuples(a),b=a[1];if(b)return"Gecko"==b[0]?goog.labs.userAgent.engine.getVersionForKey_(a,"Firefox"):b[1];var a=a[0],c;if(a&&(c=a[2])&&(c=/Trident\/([^\s;]+)/.exec(c)))return c[1]}return""};
goog.labs.userAgent.engine.isVersionOrHigher=function(a){return 0<=goog.string.compareVersions(goog.labs.userAgent.engine.getVersion(),a)};goog.labs.userAgent.engine.getVersionForKey_=function(a,b){var c=goog.array.find(a,function(a){return b==a[0]});return c&&c[1]||""};goog.userAgent={};goog.userAgent.ASSUME_IE=!1;goog.userAgent.ASSUME_GECKO=!1;goog.userAgent.ASSUME_WEBKIT=!1;goog.userAgent.ASSUME_MOBILE_WEBKIT=!1;goog.userAgent.ASSUME_OPERA=!1;goog.userAgent.ASSUME_ANY_VERSION=!1;goog.userAgent.BROWSER_KNOWN_=goog.userAgent.ASSUME_IE||goog.userAgent.ASSUME_GECKO||goog.userAgent.ASSUME_MOBILE_WEBKIT||goog.userAgent.ASSUME_WEBKIT||goog.userAgent.ASSUME_OPERA;goog.userAgent.getUserAgentString=function(){return goog.labs.userAgent.util.getUserAgent()};
goog.userAgent.getNavigator=function(){return goog.global.navigator||null};goog.userAgent.OPERA=goog.userAgent.BROWSER_KNOWN_?goog.userAgent.ASSUME_OPERA:goog.labs.userAgent.browser.isOpera();goog.userAgent.IE=goog.userAgent.BROWSER_KNOWN_?goog.userAgent.ASSUME_IE:goog.labs.userAgent.browser.isIE();goog.userAgent.GECKO=goog.userAgent.BROWSER_KNOWN_?goog.userAgent.ASSUME_GECKO:goog.labs.userAgent.engine.isGecko();
goog.userAgent.WEBKIT=goog.userAgent.BROWSER_KNOWN_?goog.userAgent.ASSUME_WEBKIT||goog.userAgent.ASSUME_MOBILE_WEBKIT:goog.labs.userAgent.engine.isWebKit();goog.userAgent.isMobile_=function(){return goog.userAgent.WEBKIT&&goog.labs.userAgent.util.matchUserAgent("Mobile")};goog.userAgent.MOBILE=goog.userAgent.ASSUME_MOBILE_WEBKIT||goog.userAgent.isMobile_();goog.userAgent.SAFARI=goog.userAgent.WEBKIT;
goog.userAgent.determinePlatform_=function(){var a=goog.userAgent.getNavigator();return a&&a.platform||""};goog.userAgent.PLATFORM=goog.userAgent.determinePlatform_();goog.userAgent.ASSUME_MAC=!1;goog.userAgent.ASSUME_WINDOWS=!1;goog.userAgent.ASSUME_LINUX=!1;goog.userAgent.ASSUME_X11=!1;goog.userAgent.ASSUME_ANDROID=!1;goog.userAgent.ASSUME_IPHONE=!1;goog.userAgent.ASSUME_IPAD=!1;
goog.userAgent.PLATFORM_KNOWN_=goog.userAgent.ASSUME_MAC||goog.userAgent.ASSUME_WINDOWS||goog.userAgent.ASSUME_LINUX||goog.userAgent.ASSUME_X11||goog.userAgent.ASSUME_ANDROID||goog.userAgent.ASSUME_IPHONE||goog.userAgent.ASSUME_IPAD;
goog.userAgent.initPlatform_=function(){goog.userAgent.detectedMac_=goog.string.contains(goog.userAgent.PLATFORM,"Mac");goog.userAgent.detectedWindows_=goog.string.contains(goog.userAgent.PLATFORM,"Win");goog.userAgent.detectedLinux_=goog.string.contains(goog.userAgent.PLATFORM,"Linux");var a=goog.userAgent.getUserAgentString();goog.userAgent.detectedAndroid_=!!a&&goog.string.contains(a,"Android");goog.userAgent.detectedIPhone_=!!a&&goog.string.contains(a,"iPhone");goog.userAgent.detectedIPad_=!!a&&
goog.string.contains(a,"iPad")};goog.userAgent.PLATFORM_KNOWN_||goog.userAgent.initPlatform_();goog.userAgent.MAC=goog.userAgent.PLATFORM_KNOWN_?goog.userAgent.ASSUME_MAC:goog.userAgent.detectedMac_;goog.userAgent.WINDOWS=goog.userAgent.PLATFORM_KNOWN_?goog.userAgent.ASSUME_WINDOWS:goog.userAgent.detectedWindows_;goog.userAgent.LINUX=goog.userAgent.PLATFORM_KNOWN_?goog.userAgent.ASSUME_LINUX:goog.userAgent.detectedLinux_;
goog.userAgent.isX11_=function(){var a=goog.userAgent.getNavigator();return!!a&&goog.string.contains(a.appVersion||"","X11")};goog.userAgent.X11=goog.userAgent.PLATFORM_KNOWN_?goog.userAgent.ASSUME_X11:goog.userAgent.isX11_();goog.userAgent.ANDROID=goog.userAgent.PLATFORM_KNOWN_?goog.userAgent.ASSUME_ANDROID:goog.userAgent.detectedAndroid_;goog.userAgent.IPHONE=goog.userAgent.PLATFORM_KNOWN_?goog.userAgent.ASSUME_IPHONE:goog.userAgent.detectedIPhone_;
goog.userAgent.IPAD=goog.userAgent.PLATFORM_KNOWN_?goog.userAgent.ASSUME_IPAD:goog.userAgent.detectedIPad_;
goog.userAgent.determineVersion_=function(){var a="",b;if(goog.userAgent.OPERA&&goog.global.opera)return a=goog.global.opera.version,goog.isFunction(a)?a():a;goog.userAgent.GECKO?b=/rv\:([^\);]+)(\)|;)/:goog.userAgent.IE?b=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/:goog.userAgent.WEBKIT&&(b=/WebKit\/(\S+)/);b&&(a=(a=b.exec(goog.userAgent.getUserAgentString()))?a[1]:"");return goog.userAgent.IE&&(b=goog.userAgent.getDocumentMode_(),b>parseFloat(a))?String(b):a};
goog.userAgent.getDocumentMode_=function(){var a=goog.global.document;return a?a.documentMode:void 0};goog.userAgent.VERSION=goog.userAgent.determineVersion_();goog.userAgent.compare=function(a,b){return goog.string.compareVersions(a,b)};goog.userAgent.isVersionOrHigherCache_={};
goog.userAgent.isVersionOrHigher=function(a){return goog.userAgent.ASSUME_ANY_VERSION||goog.userAgent.isVersionOrHigherCache_[a]||(goog.userAgent.isVersionOrHigherCache_[a]=0<=goog.string.compareVersions(goog.userAgent.VERSION,a))};goog.userAgent.isVersion=goog.userAgent.isVersionOrHigher;goog.userAgent.isDocumentModeOrHigher=function(a){return goog.userAgent.IE&&goog.userAgent.DOCUMENT_MODE>=a};goog.userAgent.isDocumentMode=goog.userAgent.isDocumentModeOrHigher;
goog.userAgent.DOCUMENT_MODE=function(){var a=goog.global.document;return a&&goog.userAgent.IE?goog.userAgent.getDocumentMode_()||("CSS1Compat"==a.compatMode?parseInt(goog.userAgent.VERSION,10):5):void 0}();goog.debug.LOGGING_ENABLED=goog.DEBUG;goog.debug.catchErrors=function(a,b,c){c=c||goog.global;var d=c.onerror,e=!!b;goog.userAgent.WEBKIT&&!goog.userAgent.isVersionOrHigher("535.3")&&(e=!e);c.onerror=function(b,c,h,k,l){d&&d(b,c,h,k,l);a({message:b,fileName:c,line:h,col:k,error:l});return e}};goog.debug.expose=function(a,b){if("undefined"==typeof a)return"undefined";if(null==a)return"NULL";var c=[],d;for(d in a)if(b||!goog.isFunction(a[d])){var e=d+" = ";try{e+=a[d]}catch(f){e+="*** "+f+" ***"}c.push(e)}return c.join("\n")};
goog.debug.deepExpose=function(a,b){var c=[],d=function(a,f,g){var h=f+"  ";g=new goog.structs.Set(g);try{if(goog.isDef(a))if(goog.isNull(a))c.push("NULL");else if(goog.isString(a))c.push('"'+a.replace(/\n/g,"\n"+f)+'"');else if(goog.isFunction(a))c.push(String(a).replace(/\n/g,"\n"+f));else if(goog.isObject(a))if(g.contains(a))c.push("*** reference loop detected ***");else{g.add(a);c.push("{");for(var k in a)if(b||!goog.isFunction(a[k]))c.push("\n"),c.push(h),c.push(k+" = "),d(a[k],h,g);c.push("\n"+
f+"}")}else c.push(a);else c.push("undefined")}catch(l){c.push("*** "+l+" ***")}};d(a,"",new goog.structs.Set);return c.join("")};goog.debug.exposeArray=function(a){for(var b=[],c=0;c<a.length;c++)goog.isArray(a[c])?b.push(goog.debug.exposeArray(a[c])):b.push(a[c]);return"[ "+b.join(", ")+" ]"};
goog.debug.exposeException=function(a,b){try{var c=goog.debug.normalizeErrorObject(a);return"Message: "+goog.string.htmlEscape(c.message)+'\nUrl: <a href="view-source:'+c.fileName+'" target="_new">'+c.fileName+"</a>\nLine: "+c.lineNumber+"\n\nBrowser stack:\n"+goog.string.htmlEscape(c.stack+"-> ")+"[end]\n\nJS stack traversal:\n"+goog.string.htmlEscape(goog.debug.getStacktrace(b)+"-> ")}catch(d){return"Exception trying to expose exception! You win, we lose. "+d}};
goog.debug.normalizeErrorObject=function(a){var b=goog.getObjectByName("window.location.href");if(goog.isString(a))return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c,d,e=!1;try{c=a.lineNumber||a.line||"Not available"}catch(f){c="Not available",e=!0}try{d=a.fileName||a.filename||a.sourceURL||goog.global.$googDebugFname||b}catch(g){d="Not available",e=!0}return!e&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?a:{message:a.message||"Not available",
name:a.name||"UnknownError",lineNumber:c,fileName:d,stack:a.stack||"Not available"}};goog.debug.enhanceError=function(a,b){var c;"string"==typeof a?(c=Error(a),Error.captureStackTrace&&Error.captureStackTrace(c,goog.debug.enhanceError)):c=a;c.stack||(c.stack=goog.debug.getStacktrace(goog.debug.enhanceError));if(b){for(var d=0;c["message"+d];)++d;c["message"+d]=String(b)}return c};
goog.debug.getStacktraceSimple=function(a){if(goog.STRICT_MODE_COMPATIBLE){var b=goog.debug.getNativeStackTrace_(goog.debug.getStacktraceSimple);if(b)return b}for(var b=[],c=arguments.callee.caller,d=0;c&&(!a||d<a);){b.push(goog.debug.getFunctionName(c));b.push("()\n");try{c=c.caller}catch(e){b.push("[exception trying to get caller]\n");break}d++;if(d>=goog.debug.MAX_STACK_DEPTH){b.push("[...long stack...]");break}}a&&d>=a?b.push("[...reached max depth limit...]"):b.push("[end]");return b.join("")};
goog.debug.MAX_STACK_DEPTH=50;goog.debug.getNativeStackTrace_=function(a){var b=Error();if(Error.captureStackTrace)return Error.captureStackTrace(b,a),String(b.stack);try{throw b;}catch(c){b=c}return(a=b.stack)?String(a):null};goog.debug.getStacktrace=function(a){var b;goog.STRICT_MODE_COMPATIBLE&&(b=goog.debug.getNativeStackTrace_(a||goog.debug.getStacktrace));b||(b=goog.debug.getStacktraceHelper_(a||arguments.callee.caller,[]));return b};
goog.debug.getStacktraceHelper_=function(a,b){var c=[];if(goog.array.contains(b,a))c.push("[...circular reference...]");else if(a&&b.length<goog.debug.MAX_STACK_DEPTH){c.push(goog.debug.getFunctionName(a)+"(");for(var d=a.arguments,e=0;d&&e<d.length;e++){0<e&&c.push(", ");var f;f=d[e];switch(typeof f){case "object":f=f?"object":"null";break;case "string":break;case "number":f=String(f);break;case "boolean":f=f?"true":"false";break;case "function":f=(f=goog.debug.getFunctionName(f))?f:"[fn]";break;
default:f=typeof f}40<f.length&&(f=f.substr(0,40)+"...");c.push(f)}b.push(a);c.push(")\n");try{c.push(goog.debug.getStacktraceHelper_(a.caller,b))}catch(g){c.push("[exception trying to get caller]\n")}}else a?c.push("[...long stack...]"):c.push("[end]");return c.join("")};goog.debug.setFunctionResolver=function(a){goog.debug.fnNameResolver_=a};
goog.debug.getFunctionName=function(a){if(goog.debug.fnNameCache_[a])return goog.debug.fnNameCache_[a];if(goog.debug.fnNameResolver_){var b=goog.debug.fnNameResolver_(a);if(b)return goog.debug.fnNameCache_[a]=b}a=String(a);goog.debug.fnNameCache_[a]||(b=/function ([^\(]+)/.exec(a),goog.debug.fnNameCache_[a]=b?b[1]:"[Anonymous]");return goog.debug.fnNameCache_[a]};
goog.debug.makeWhitespaceVisible=function(a){return a.replace(/ /g,"[_]").replace(/\f/g,"[f]").replace(/\n/g,"[n]\n").replace(/\r/g,"[r]").replace(/\t/g,"[t]")};goog.debug.fnNameCache_={};goog.debug.LogRecord=function(a,b,c,d,e){this.reset(a,b,c,d,e)};goog.debug.LogRecord.prototype.sequenceNumber_=0;goog.debug.LogRecord.prototype.exception_=null;goog.debug.LogRecord.prototype.exceptionText_=null;goog.debug.LogRecord.ENABLE_SEQUENCE_NUMBERS=!0;goog.debug.LogRecord.nextSequenceNumber_=0;
goog.debug.LogRecord.prototype.reset=function(a,b,c,d,e){goog.debug.LogRecord.ENABLE_SEQUENCE_NUMBERS&&(this.sequenceNumber_="number"==typeof e?e:goog.debug.LogRecord.nextSequenceNumber_++);this.time_=d||goog.now();this.level_=a;this.msg_=b;this.loggerName_=c;delete this.exception_;delete this.exceptionText_};goog.debug.LogRecord.prototype.getLoggerName=function(){return this.loggerName_};goog.debug.LogRecord.prototype.getException=function(){return this.exception_};
goog.debug.LogRecord.prototype.setException=function(a){this.exception_=a};goog.debug.LogRecord.prototype.getExceptionText=function(){return this.exceptionText_};goog.debug.LogRecord.prototype.setExceptionText=function(a){this.exceptionText_=a};goog.debug.LogRecord.prototype.setLoggerName=function(a){this.loggerName_=a};goog.debug.LogRecord.prototype.getLevel=function(){return this.level_};goog.debug.LogRecord.prototype.setLevel=function(a){this.level_=a};
goog.debug.LogRecord.prototype.getMessage=function(){return this.msg_};goog.debug.LogRecord.prototype.setMessage=function(a){this.msg_=a};goog.debug.LogRecord.prototype.getMillis=function(){return this.time_};goog.debug.LogRecord.prototype.setMillis=function(a){this.time_=a};goog.debug.LogRecord.prototype.getSequenceNumber=function(){return this.sequenceNumber_};goog.debug.LogBuffer=function(){goog.asserts.assert(goog.debug.LogBuffer.isBufferingEnabled(),"Cannot use goog.debug.LogBuffer without defining goog.debug.LogBuffer.CAPACITY.");this.clear()};goog.debug.LogBuffer.getInstance=function(){goog.debug.LogBuffer.instance_||(goog.debug.LogBuffer.instance_=new goog.debug.LogBuffer);return goog.debug.LogBuffer.instance_};goog.debug.LogBuffer.CAPACITY=0;
goog.debug.LogBuffer.prototype.addRecord=function(a,b,c){var d=(this.curIndex_+1)%goog.debug.LogBuffer.CAPACITY;this.curIndex_=d;if(this.isFull_)return d=this.buffer_[d],d.reset(a,b,c),d;this.isFull_=d==goog.debug.LogBuffer.CAPACITY-1;return this.buffer_[d]=new goog.debug.LogRecord(a,b,c)};goog.debug.LogBuffer.isBufferingEnabled=function(){return 0<goog.debug.LogBuffer.CAPACITY};
goog.debug.LogBuffer.prototype.clear=function(){this.buffer_=Array(goog.debug.LogBuffer.CAPACITY);this.curIndex_=-1;this.isFull_=!1};goog.debug.LogBuffer.prototype.forEachRecord=function(a){var b=this.buffer_;if(b[0]){var c=this.curIndex_,d=this.isFull_?c:-1;do d=(d+1)%goog.debug.LogBuffer.CAPACITY,a(b[d]);while(d!=c)}};goog.debug.Logger=function(a){this.name_=a;this.handlers_=this.children_=this.level_=this.parent_=null};goog.debug.Logger.ROOT_LOGGER_NAME="";goog.debug.Logger.ENABLE_HIERARCHY=!0;goog.debug.Logger.ENABLE_HIERARCHY||(goog.debug.Logger.rootHandlers_=[]);goog.debug.Logger.Level=function(a,b){this.name=a;this.value=b};goog.debug.Logger.Level.prototype.toString=function(){return this.name};goog.debug.Logger.Level.OFF=new goog.debug.Logger.Level("OFF",Infinity);
goog.debug.Logger.Level.SHOUT=new goog.debug.Logger.Level("SHOUT",1200);goog.debug.Logger.Level.SEVERE=new goog.debug.Logger.Level("SEVERE",1E3);goog.debug.Logger.Level.WARNING=new goog.debug.Logger.Level("WARNING",900);goog.debug.Logger.Level.INFO=new goog.debug.Logger.Level("INFO",800);goog.debug.Logger.Level.CONFIG=new goog.debug.Logger.Level("CONFIG",700);goog.debug.Logger.Level.FINE=new goog.debug.Logger.Level("FINE",500);goog.debug.Logger.Level.FINER=new goog.debug.Logger.Level("FINER",400);
goog.debug.Logger.Level.FINEST=new goog.debug.Logger.Level("FINEST",300);goog.debug.Logger.Level.ALL=new goog.debug.Logger.Level("ALL",0);goog.debug.Logger.Level.PREDEFINED_LEVELS=[goog.debug.Logger.Level.OFF,goog.debug.Logger.Level.SHOUT,goog.debug.Logger.Level.SEVERE,goog.debug.Logger.Level.WARNING,goog.debug.Logger.Level.INFO,goog.debug.Logger.Level.CONFIG,goog.debug.Logger.Level.FINE,goog.debug.Logger.Level.FINER,goog.debug.Logger.Level.FINEST,goog.debug.Logger.Level.ALL];
goog.debug.Logger.Level.predefinedLevelsCache_=null;goog.debug.Logger.Level.createPredefinedLevelsCache_=function(){goog.debug.Logger.Level.predefinedLevelsCache_={};for(var a=0,b;b=goog.debug.Logger.Level.PREDEFINED_LEVELS[a];a++)goog.debug.Logger.Level.predefinedLevelsCache_[b.value]=b,goog.debug.Logger.Level.predefinedLevelsCache_[b.name]=b};
goog.debug.Logger.Level.getPredefinedLevel=function(a){goog.debug.Logger.Level.predefinedLevelsCache_||goog.debug.Logger.Level.createPredefinedLevelsCache_();return goog.debug.Logger.Level.predefinedLevelsCache_[a]||null};
goog.debug.Logger.Level.getPredefinedLevelByValue=function(a){goog.debug.Logger.Level.predefinedLevelsCache_||goog.debug.Logger.Level.createPredefinedLevelsCache_();if(a in goog.debug.Logger.Level.predefinedLevelsCache_)return goog.debug.Logger.Level.predefinedLevelsCache_[a];for(var b=0;b<goog.debug.Logger.Level.PREDEFINED_LEVELS.length;++b){var c=goog.debug.Logger.Level.PREDEFINED_LEVELS[b];if(c.value<=a)return c}return null};goog.debug.Logger.getLogger=function(a){return goog.debug.LogManager.getLogger(a)};
goog.debug.Logger.logToProfilers=function(a){goog.global.console&&(goog.global.console.timeStamp?goog.global.console.timeStamp(a):goog.global.console.markTimeline&&goog.global.console.markTimeline(a));goog.global.msWriteProfilerMark&&goog.global.msWriteProfilerMark(a)};goog.debug.Logger.prototype.getName=function(){return this.name_};
goog.debug.Logger.prototype.addHandler=function(a){goog.debug.LOGGING_ENABLED&&(goog.debug.Logger.ENABLE_HIERARCHY?(this.handlers_||(this.handlers_=[]),this.handlers_.push(a)):(goog.asserts.assert(!this.name_,"Cannot call addHandler on a non-root logger when goog.debug.Logger.ENABLE_HIERARCHY is false."),goog.debug.Logger.rootHandlers_.push(a)))};
goog.debug.Logger.prototype.removeHandler=function(a){if(goog.debug.LOGGING_ENABLED){var b=goog.debug.Logger.ENABLE_HIERARCHY?this.handlers_:goog.debug.Logger.rootHandlers_;return!!b&&goog.array.remove(b,a)}return!1};goog.debug.Logger.prototype.getParent=function(){return this.parent_};goog.debug.Logger.prototype.getChildren=function(){this.children_||(this.children_={});return this.children_};
goog.debug.Logger.prototype.setLevel=function(a){goog.debug.LOGGING_ENABLED&&(goog.debug.Logger.ENABLE_HIERARCHY?this.level_=a:(goog.asserts.assert(!this.name_,"Cannot call setLevel() on a non-root logger when goog.debug.Logger.ENABLE_HIERARCHY is false."),goog.debug.Logger.rootLevel_=a))};goog.debug.Logger.prototype.getLevel=function(){return goog.debug.LOGGING_ENABLED?this.level_:goog.debug.Logger.Level.OFF};
goog.debug.Logger.prototype.getEffectiveLevel=function(){if(!goog.debug.LOGGING_ENABLED)return goog.debug.Logger.Level.OFF;if(!goog.debug.Logger.ENABLE_HIERARCHY)return goog.debug.Logger.rootLevel_;if(this.level_)return this.level_;if(this.parent_)return this.parent_.getEffectiveLevel();goog.asserts.fail("Root logger has no level set.");return null};goog.debug.Logger.prototype.isLoggable=function(a){return goog.debug.LOGGING_ENABLED&&a.value>=this.getEffectiveLevel().value};
goog.debug.Logger.prototype.log=function(a,b,c){goog.debug.LOGGING_ENABLED&&this.isLoggable(a)&&(goog.isFunction(b)&&(b=b()),this.doLogRecord_(this.getLogRecord(a,b,c,goog.debug.Logger.prototype.log)))};
goog.debug.Logger.prototype.getLogRecord=function(a,b,c,d){var e=goog.debug.LogBuffer.isBufferingEnabled()?goog.debug.LogBuffer.getInstance().addRecord(a,b,this.name_):new goog.debug.LogRecord(a,String(b),this.name_);if(c){var f;f=goog.STRICT_MODE_COMPATIBLE?d||goog.debug.Logger.prototype.getLogRecord:d||arguments.callee.caller;e.setException(c);e.setExceptionText(goog.debug.exposeException(c,f))}return e};
goog.debug.Logger.prototype.shout=function(a,b){goog.debug.LOGGING_ENABLED&&this.log(goog.debug.Logger.Level.SHOUT,a,b)};goog.debug.Logger.prototype.severe=function(a,b){goog.debug.LOGGING_ENABLED&&this.log(goog.debug.Logger.Level.SEVERE,a,b)};goog.debug.Logger.prototype.warning=function(a,b){goog.debug.LOGGING_ENABLED&&this.log(goog.debug.Logger.Level.WARNING,a,b)};goog.debug.Logger.prototype.info=function(a,b){goog.debug.LOGGING_ENABLED&&this.log(goog.debug.Logger.Level.INFO,a,b)};
goog.debug.Logger.prototype.config=function(a,b){goog.debug.LOGGING_ENABLED&&this.log(goog.debug.Logger.Level.CONFIG,a,b)};goog.debug.Logger.prototype.fine=function(a,b){goog.debug.LOGGING_ENABLED&&this.log(goog.debug.Logger.Level.FINE,a,b)};goog.debug.Logger.prototype.finer=function(a,b){goog.debug.LOGGING_ENABLED&&this.log(goog.debug.Logger.Level.FINER,a,b)};goog.debug.Logger.prototype.finest=function(a,b){goog.debug.LOGGING_ENABLED&&this.log(goog.debug.Logger.Level.FINEST,a,b)};
goog.debug.Logger.prototype.logRecord=function(a){goog.debug.LOGGING_ENABLED&&this.isLoggable(a.getLevel())&&this.doLogRecord_(a)};goog.debug.Logger.prototype.doLogRecord_=function(a){goog.debug.Logger.logToProfilers("log:"+a.getMessage());if(goog.debug.Logger.ENABLE_HIERARCHY)for(var b=this;b;)b.callPublish_(a),b=b.getParent();else for(var b=0,c;c=goog.debug.Logger.rootHandlers_[b++];)c(a)};goog.debug.Logger.prototype.callPublish_=function(a){if(this.handlers_)for(var b=0,c;c=this.handlers_[b];b++)c(a)};
goog.debug.Logger.prototype.setParent_=function(a){this.parent_=a};goog.debug.Logger.prototype.addChild_=function(a,b){this.getChildren()[a]=b};goog.debug.LogManager={};goog.debug.LogManager.loggers_={};goog.debug.LogManager.rootLogger_=null;
goog.debug.LogManager.initialize=function(){goog.debug.LogManager.rootLogger_||(goog.debug.LogManager.rootLogger_=new goog.debug.Logger(goog.debug.Logger.ROOT_LOGGER_NAME),goog.debug.LogManager.loggers_[goog.debug.Logger.ROOT_LOGGER_NAME]=goog.debug.LogManager.rootLogger_,goog.debug.LogManager.rootLogger_.setLevel(goog.debug.Logger.Level.CONFIG))};goog.debug.LogManager.getLoggers=function(){return goog.debug.LogManager.loggers_};
goog.debug.LogManager.getRoot=function(){goog.debug.LogManager.initialize();return goog.debug.LogManager.rootLogger_};goog.debug.LogManager.getLogger=function(a){goog.debug.LogManager.initialize();return goog.debug.LogManager.loggers_[a]||goog.debug.LogManager.createLogger_(a)};goog.debug.LogManager.createFunctionForCatchErrors=function(a){return function(b){(a||goog.debug.LogManager.getRoot()).severe("Error: "+b.message+" ("+b.fileName+" @ Line: "+b.line+")")}};
goog.debug.LogManager.createLogger_=function(a){var b=new goog.debug.Logger(a);if(goog.debug.Logger.ENABLE_HIERARCHY){var c=a.lastIndexOf("."),d=a.substr(0,c),c=a.substr(c+1),d=goog.debug.LogManager.getLogger(d);d.addChild_(c,b);b.setParent_(d)}return goog.debug.LogManager.loggers_[a]=b};goog.log={};goog.log.ENABLED=goog.debug.LOGGING_ENABLED;goog.log.ROOT_LOGGER_NAME=goog.debug.Logger.ROOT_LOGGER_NAME;goog.log.Logger=goog.debug.Logger;goog.log.Level=goog.debug.Logger.Level;goog.log.LogRecord=goog.debug.LogRecord;goog.log.getLogger=function(a,b){if(goog.log.ENABLED){var c=goog.debug.LogManager.getLogger(a);b&&c&&c.setLevel(b);return c}return null};goog.log.addHandler=function(a,b){goog.log.ENABLED&&a&&a.addHandler(b)};
goog.log.removeHandler=function(a,b){return goog.log.ENABLED&&a?a.removeHandler(b):!1};goog.log.log=function(a,b,c,d){goog.log.ENABLED&&a&&a.log(b,c,d)};goog.log.error=function(a,b,c){goog.log.ENABLED&&a&&a.severe(b,c)};goog.log.warning=function(a,b,c){goog.log.ENABLED&&a&&a.warning(b,c)};goog.log.info=function(a,b,c){goog.log.ENABLED&&a&&a.info(b,c)};goog.log.fine=function(a,b,c){goog.log.ENABLED&&a&&a.fine(b,c)};/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
lf.backstore.ObjectStore=function(a,b){this.store_=a;this.deserializeFn_=b;this.logger_=goog.log.getLogger("lf.backstore.ObjectStore")};
lf.backstore.ObjectStore.prototype.get=function(a){if(0==a.length)return this.getAll_();a=a.map(function(a,c){return new goog.Promise(function(c,e){var f;try{f=this.store_.get(a)}catch(g){goog.log.error(this.logger_,g.message);e(g);return}f.onerror=goog.bind(function(c){goog.log.error(this.logger_,"Failed to get "+a+":"+f.error.name);e(c)},this);f.onsuccess=goog.bind(function(a){c(this.deserializeFn_(a.target.result))},this)},this)},this);return goog.Promise.all(a)};
lf.backstore.ObjectStore.prototype.getAll_=function(){return new goog.Promise(function(a,b){var c=[],d;try{d=this.store_.openCursor()}catch(e){goog.log.error(this.logger_,"Failed to open cursor:"+e.message);b(e);return}d.onerror=goog.bind(function(a){goog.log.error(this.logger_,"Failed to iterate:"+d.error.name);b(a)},this);d.onsuccess=goog.bind(function(){var b=d.result;b?(c.push(this.deserializeFn_(b.value)),b.continue()):a(c)},this)},this)};
lf.backstore.ObjectStore.prototype.performWriteOp_=function(a){return new goog.Promise(function(b,c){var d;try{d=a()}catch(e){goog.log.error(this.logger_,e.message);c(e);return}d.onsuccess=b;d.onerror=c},this)};lf.backstore.ObjectStore.prototype.put=function(a){if(0==a.length)return goog.Promise.resolve();a=a.map(function(a){return this.performWriteOp_(goog.bind(function(){return this.store_.put(a.serialize())},this))},this);return goog.Promise.all(a)};
lf.backstore.ObjectStore.prototype.remove=function(a){return new goog.Promise(function(b,c){var d=this.store_.count();d.onsuccess=goog.bind(function(d){if(0==a.length||d.target.result==a.length)return this.performWriteOp_(goog.bind(function(){return this.store_.clear()},this));d=a.map(function(a){return this.performWriteOp_(goog.bind(function(){return this.store_.delete(a)},this))},this);goog.Promise.all(d).then(b,c)},this);d.onerror=c},this)};
lf.backstore.ObjectStore.prototype.pipe=function(a){throw new lf.Exception(lf.Exception.Type.SYNTAX,"ObjectStore should be the last in chain");};/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
lf.backstore.BundledObjectStore=function(a,b){this.store_=a;this.deserializeFn_=b;this.logger_=goog.log.getLogger("lf.backstore.BundledObjectStore")};lf.backstore.BundledObjectStore.prototype.get=function(a){return 0==a.length?this.getAll_():this.getPagesByRowIds_(a).then(goog.bind(function(b){return a.map(function(a){var d=b.get(lf.backstore.Page.toPageId(a));goog.asserts.assert(d,"Containing page is empty");return this.deserializeFn_(d.getPayload()[a])},this)},this))};
lf.backstore.BundledObjectStore.prototype.getPagesByRowIds_=function(a){var b=new goog.structs.Map,c=goog.Promise.withResolver();a=lf.backstore.Page.toPageIds(a).map(function(a,c){return new goog.Promise(function(c,e){var h;try{h=this.store_.get(a)}catch(k){goog.log.error(this.logger_,k.message);e(k);return}h.onerror=goog.bind(function(b){goog.log.error(this.logger_,"Failed to get page "+a+":"+h.error.name);e(b)},this);h.onsuccess=goog.bind(function(a){a=lf.backstore.Page.deserialize(a.target.result);
b.set(a.getId(),a);c()},this)},this)},this);goog.Promise.all(a).then(function(){c.resolve(b)});return c.promise};
lf.backstore.BundledObjectStore.prototype.getAll_=function(){return new goog.Promise(function(a,b){var c=[],d;try{d=this.store_.openCursor()}catch(e){goog.log.error(this.logger_,"Failed to open cursor:"+e.message);b(e);return}d.onerror=goog.bind(function(a){goog.log.error(this.logger_,"Failed to iterate:"+d.error.name);b(a)},this);d.onsuccess=goog.bind(function(){var b=d.result;if(b){var e=lf.backstore.Page.deserialize(b.value).getPayload(),h;for(h in e)c.push(this.deserializeFn_(e[h]));b.continue()}else a(c)},
this)},this)};lf.backstore.BundledObjectStore.prototype.performWriteOp_=function(a){return new goog.Promise(function(b,c){var d;try{d=a()}catch(e){goog.log.error(this.logger_,e.message);c(e);return}d.onsuccess=b;d.onerror=c},this)};lf.backstore.BundledObjectStore.prototype.getPageFromCache_=function(a){var b=lf.Global.get().getService(lf.service.CACHE),c=lf.backstore.Page.getPageRange(a),b=b.getRange(this.store_.name,c[0],c[1]);a=new lf.backstore.Page(a);a.setRows(b);return a};
lf.backstore.BundledObjectStore.prototype.put=function(a){if(0==a.length)return goog.Promise.resolve();var b=new goog.structs.Map;a.forEach(function(a){var d=lf.backstore.Page.toPageId(a.id()),e=b.get(d,null);goog.isNull(e)&&(e=this.getPageFromCache_(d));e.setRows([a]);b.set(d,e)},this);a=b.getValues().map(function(a){return this.performWriteOp_(goog.bind(function(){return this.store_.put(a.serialize())},this))},this);return goog.Promise.all(a)};
lf.backstore.BundledObjectStore.prototype.remove=function(a){if(0==a.length)return this.performWriteOp_(goog.bind(function(){return this.store_.clear()},this));var b=new goog.structs.Map;a.forEach(function(a){var d=lf.backstore.Page.toPageId(a),e=b.get(d,null);goog.isNull(e)&&(e=this.getPageFromCache_(d));e.removeRows([a]);b.set(d,e)},this);a=b.getValues().map(function(a){return this.performWriteOp_(goog.bind(function(){return goog.object.isEmpty(a.getPayload())?this.store_.delete(a.getId()):this.store_.put(a.serialize())},
this))},this);return goog.Promise.all(a)};lf.backstore.BundledObjectStore.prototype.pipe=function(a){throw new lf.Exception(lf.Exception.Type.SYNTAX,"BundledObjectStore should be the last in chain");};/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
lf.backstore.Tx=function(){};/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
lf.backstore.BaseTx=function(a,b){this.journal_=a;this.txType_=b;this.resolver=goog.Promise.withResolver()};lf.backstore.BaseTx.prototype.getJournal=function(){return this.journal_};lf.backstore.BaseTx.prototype.finished=function(){return this.resolver.promise};lf.backstore.BaseTx.prototype.commit=function(){return(this.txType_==lf.TransactionType.READ_ONLY?goog.Promise.resolve():this.mergeIntoBackstore_()).then(goog.bind(function(){this.journal_.commit()},this))};
lf.backstore.BaseTx.prototype.mergeIntoBackstore_=function(){var a=this.journal_.getDiff();a.getKeys().forEach(function(b){var c=this.journal_.getScope().get(b),c=this.getTable(c);b=a.get(b);var d=b.getDeleted().getValues().map(function(a){return a.id()});0<d.length&&c.remove(d).thenCatch(this.handleError_,this);b=b.getModified().getValues().map(function(a){return a[1]}).concat(b.getAdded().getValues());c.put(b).thenCatch(this.handleError_,this)},this);return this.resolver.promise};
lf.backstore.BaseTx.prototype.handleError_=function(a){goog.log.error(this.getLogger(),"DB error",a);this.resolver.reject(a)};/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
lf.backstore.IndexedDBTx=function(a,b,c,d){lf.backstore.BaseTx.call(this,b,c);this.tx_=a;this.logger_=goog.log.getLogger("lf.backstore.IndexedDBTx");this.bundleMode_=d;this.tx_.oncomplete=goog.bind(this.resolver.resolve,this.resolver);this.tx_.onabort=goog.bind(this.resolver.reject,this.resolver)};goog.inherits(lf.backstore.IndexedDBTx,lf.backstore.BaseTx);lf.backstore.IndexedDBTx.prototype.getLogger=function(){return this.logger_};
lf.backstore.IndexedDBTx.prototype.getTable=function(a){return this.bundleMode_?new lf.backstore.BundledObjectStore(this.tx_.objectStore(a.getName()),a.deserializeRow):new lf.backstore.ObjectStore(this.tx_.objectStore(a.getName()),a.deserializeRow)};lf.backstore.IndexedDBTx.prototype.abort=function(){this.tx_.abort()};/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
lf.raw={};lf.raw.BackStore=function(){};/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
lf.backstore.IndexedDBRawBackStore=function(a,b,c,d){this.db_=b;this.tx_=c;this.version_=a;this.bundleMode_=d};lf.backstore.IndexedDBRawBackStore.prototype.getRawDBInstance=function(){return this.db_};lf.backstore.IndexedDBRawBackStore.prototype.getRawTransaction=function(){return this.tx_};lf.backstore.IndexedDBRawBackStore.prototype.dropTable=function(a){return new goog.Promise(function(b,c){try{this.db_.deleteObjectStore(a)}catch(d){c(d);return}b()},this)};
lf.backstore.IndexedDBRawBackStore.prototype.openCursorForWrite_=function(a,b,c){return new goog.Promise(function(d,e){var f;try{var g=this.tx_.objectStore(a);f=g.openCursor()}catch(h){e(h);return}f.onsuccess=function(a){(a=f.result)?(b(a),a.continue()):(c(g),d())};f.onerror=e},this)};lf.backstore.IndexedDBRawBackStore.convert=function(a){var b=null;return b=a instanceof ArrayBuffer?lf.Row.binToHex(a):a instanceof Date?a.getTime():a};
lf.backstore.IndexedDBRawBackStore.prototype.transformRows_=function(a,b){var c=function(a){var c=lf.Row.deserialize(a.value);b(c);a.update(c.serialize())},d=function(a){var c=lf.backstore.Page.deserialize(a.value),d=c.getPayload(),h;for(h in d){var k=lf.Row.deserialize(d[h]);b(k);d[h]=k.serialize()}a.update(c.serialize())};return this.openCursorForWrite_(a,this.bundleMode_?d:c,function(){})};
lf.backstore.IndexedDBRawBackStore.prototype.addTableColumn=function(a,b,c){var d=lf.backstore.IndexedDBRawBackStore.convert(c);return this.transformRows_(a,function(a){a.payload()[b]=d})};lf.backstore.IndexedDBRawBackStore.prototype.dropTableColumn=function(a,b){return this.transformRows_(a,function(a){delete a.payload()[b]})};lf.backstore.IndexedDBRawBackStore.prototype.renameTableColumn=function(a,b,c){return this.transformRows_(a,function(a){a.payload()[c]=a.payload()[b];delete a.payload()[b]})};
lf.backstore.IndexedDBRawBackStore.prototype.getTableRows_=function(a){var b=[];return new goog.Promise(function(c,d){var e;try{e=this.tx_.objectStore(a).openCursor()}catch(f){d(f);return}e.onsuccess=goog.bind(function(a){if(a=e.result){if(this.bundleMode_){var d=lf.backstore.Page.deserialize(a.value).getPayload(),f;for(f in d)b.push(d[f])}else b.push(a.value);a.continue()}else c(b)},this);e.onerror=d},this)};
lf.backstore.IndexedDBRawBackStore.prototype.createRow=function(a){var b={};goog.object.forEach(a,goog.bind(function(a,d){b[d]=lf.backstore.IndexedDBRawBackStore.convert(a)},this));return lf.Row.create(b)};lf.backstore.IndexedDBRawBackStore.prototype.getVersion=function(){return this.version_};
lf.backstore.IndexedDBRawBackStore.prototype.dump=function(){for(var a=this.db_.objectStoreNames,b=[],c=0;c<a.length;++c){var d=a.item(c);b.push(this.dumpTable_(d))}return goog.Promise.all(b).then(function(b){var c={};b.forEach(function(b,d){c[a.item(d)]=b});return c})};lf.backstore.IndexedDBRawBackStore.prototype.dumpTable_=function(a){return this.getTableRows_(a).then(function(a){return a.map(function(a){return a.value})})};/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
lf.backstore.IndexedDB=function(a,b){this.schema_=a;this.logger_=goog.log.getLogger("lf.backstore.IndexedDB");this.bundleMode_=b||!1};
lf.backstore.IndexedDB.prototype.init=function(a){var b=window.indexedDB||window.mozIndexedDB||window.webkitIndexedDB||window.msIndexedDB;if(!goog.isDefAndNotNull(b))throw new lf.Exception(lf.Exception.Type.NOT_SUPPORTED,"IndexedDB not supported by platform.");var c=a||function(a){return goog.Promise.resolve()};return new goog.Promise(function(a,e){var f;try{f=b.open(this.schema_.getName(),this.schema_.getVersion())}catch(g){e(g);return}f.onerror=e;f.onupgradeneeded=goog.bind(function(a){this.onUpgradeNeeded_(c,
a).then(function(){},goog.bind(function(a){goog.log.error(this.logger_,"onUpgradeNeeded failed: "+a);e(a)},this))},this);f.onsuccess=goog.bind(function(b){this.db_=b.target.result;this.scanRowId_().then(goog.bind(function(b){lf.Row.setNextId(b+1);a(this.db_)},this))},this)},this)};lf.backstore.IndexedDB.prototype.onUpgradeNeeded_=function(a,b){var c=b.target.result,d=new lf.backstore.IndexedDBRawBackStore(b.oldVersion,c,b.target.transaction,this.bundleMode_);this.createTables_(c);return a(d)};
lf.backstore.IndexedDB.prototype.createTables_=function(a){for(var b=this.schema_.getTables().map(function(a){return a.getName()}),c=0;c<b.length;++c)a.objectStoreNames.contains(b[c])||a.createObjectStore(b[c],{keyPath:"id"})};lf.backstore.IndexedDB.prototype.createTx=function(a,b){var c=b.getScope().getValues().map(function(a){return a.getName()}),c=this.db_.transaction(c,a==lf.TransactionType.READ_ONLY?"readonly":"readwrite");return new lf.backstore.IndexedDBTx(c,b,a,this.bundleMode_)};
lf.backstore.IndexedDB.prototype.scanRowId_=function(a){var b=this.schema_.getTables().map(function(a){return a.getName()}),c=this.db_,d=0,e=goog.bind(function(a){return this.bundleMode_?(a=lf.backstore.Page.deserialize(a.value),goog.object.getKeys(a.getPayload()).reduce(function(a,b){return Math.max(a,b)},0)):a.key},this),f=goog.bind(function(b){return new goog.Promise(function(f,g){var n;try{n=(a||c.transaction([b])).objectStore(b).openCursor(null,"prev")}catch(m){goog.log.error(this.logger_,"scanRowId failed: "+
m);g(m);return}n.onsuccess=function(a){if(a=a.target.result)d=Math.max(d,e(a)),a.continue();f(d)};n.onerror=function(){f(d)}},this)},this),g=function(){if(0==b.length)return goog.Promise.resolve();var a=b.shift();return f(a).then(g)};return new goog.Promise(function(a,b){g().then(function(){a(d)})})};lf.backstore.IndexedDB.prototype.close=function(){this.db_.close()};/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
lf.index.Index=function(){};/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
lf.index.RowId=function(){this.rows_=new goog.structs.Set};lf.index.RowId.prototype.getName=function(){return"##row_id##"};lf.index.RowId.prototype.add=function(a,b){if("number"!=typeof a)throw new lf.Exception(lf.Exception.Type.DATA,"Row id must be numbers");this.rows_.add(a)};lf.index.RowId.prototype.set=function(a,b){this.add(a,b)};lf.index.RowId.prototype.remove=function(a,b){this.rows_.remove(a)};lf.index.RowId.prototype.get=function(a){return this.containsKey(a)?[a]:[]};
lf.index.RowId.prototype.cost=function(a){return this.rows_.getCount()};lf.index.RowId.prototype.getRange=function(a){a=a||lf.index.KeyRange.all();if(goog.isDefAndNotNull(a.from)&&"number"!=typeof a.from||goog.isDefAndNotNull(a.to)&&"number"!=typeof a.to)throw new lf.Exception(lf.Exception.Type.DATA,"Row id must be numbers");return this.rows_.getValues().filter(a.getComparator())};lf.index.RowId.prototype.clear=function(){this.rows_.clear()};lf.index.RowId.prototype.containsKey=function(a){return this.rows_.contains(a)};/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
lf.index.IndexStore=function(){};/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
lf.index.AANode_=function(){this.level=0;this.left=this;this.right=this};lf.index.AANode_.create=function(a,b,c){var d=new lf.index.AANode_;d.level=1;d.left=c;d.right=c;d.key=a;d.value=b;return d};lf.index.AATree=function(a){this.name_=a;this.nullNode_=new lf.index.AANode_;this.deleted_=null;this.root_=this.nullNode_};lf.index.AATree.prototype.getName=function(){return this.name_};lf.index.AATree.prototype.skew_=function(a){if(a.level==a.left.level){var b=a.left;a.left=b.right;b.right=a;return b}return a};
lf.index.AATree.prototype.split_=function(a){if(a.right.right.level==a.level){var b=a.right;a.right=b.left;b.left=a;b.level++;return b}return a};lf.index.AATree.prototype.insert_=function(a,b,c){if(a==this.nullNode_)return lf.index.AANode_.create(b,c,this.nullNode_);if(b<a.key)a.left=this.insert_(a.left,b,c);else if(b>a.key)a.right=this.insert_(a.right,b,c);else throw new lf.Exception(lf.Exception.Type.CONSTRAINT,"AA index does not support duplicate keys");a=this.skew_(a);return a=this.split_(a)};
lf.index.AATree.prototype.add=function(a,b){this.root_=this.insert_(this.root_,a,b)};lf.index.AATree.prototype.set=function(a,b){var c=this.search_(this.root_,a);null==c?this.add(a,b):c.value=b};
lf.index.AATree.prototype.delete_=function(a,b){if(a==this.nullNode_)return this.nullNode_;b<a.key?a.left=this.delete_(a.left,b):(b==a.key&&(this.deleted_=a),a.right=this.delete_(a.right,b));var c=a;if(null!=this.deleted_)this.deleted_.key=a.key,this.deleted_.value=a.value,this.deleted_=null,c=c.right;else if(c.left.level<c.level-1||c.right.level<c.level-1)--c.level,c.right.level>c.level&&(c.right.level=c.level),c=this.skew_(a),c.right=this.skew_(c.right),c.right.right=this.skew_(c.right.right),c=
this.split_(c),c.right=this.split_(c.right);return c};lf.index.AATree.prototype.remove=function(a,b){this.root_=this.delete_(this.root_,a)};lf.index.AATree.prototype.search_=function(a,b){return a==this.nullNode_?null:b==a.key?a:b<a.key?this.search_(a.left,b):this.search_(a.right,b)};lf.index.AATree.prototype.get=function(a){a=this.search_(this.root_,a);return null==a?[]:[a.value]};lf.index.AATree.prototype.cost=function(a){return this.getRange(a).length};
lf.index.AATree.prototype.findMin_=function(){for(var a=this.root_;a.left!=this.nullNode_;)a=a.left;return a};lf.index.AATree.prototype.findMax_=function(){for(var a=this.root_;a.right!=this.nullNode_;)a=a.right;return a};lf.index.AATree.prototype.traverse_=function(a,b,c){a!=this.nullNode_&&(a.key>b.from&&this.traverse_(a.left,b,c),b.getComparator()(a.key)&&c.push(a.value),a.key<b.to&&this.traverse_(a.right,b,c))};
lf.index.AATree.prototype.getRange=function(a){var b=null;goog.isDefAndNotNull(a)?(b=a,goog.isNull(b.from)&&(b.from=this.findMin_().key),goog.isNull(b.to)&&(b.to=this.findMax_().key)):b=new lf.index.KeyRange(this.findMin_().key,this.findMax_().key,!1,!1);a=[];this.traverse_(this.root_,b,a);return a};lf.index.AATree.prototype.clear=function(){this.root_=this.nullNode_};lf.index.AATree.prototype.containsKey=function(a){return null!=this.search_(this.root_,a)};
lf.index.AATree.prototype.dump_=function(a,b){a!=this.nullNode_&&(b[a.level-1].push("["+a.key+"-"+(a.left==this.nullNode_?0:a.left.key)+"/"+(a.right==this.nullNode_?0:a.right.key)+"]"),this.dump_(a.left,b),this.dump_(a.right,b))};lf.index.AATree.prototype.toString=function(){for(var a=[],b=0;b<this.root_.level;++b)a.push([]);this.dump_(this.root_,a);for(var b="",c=a.length-1;0<=c;--c)b=b+a[c].join("")+"\n";return b};/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
lf.index.Map=function(a){this.name_=a;this.map_=new goog.structs.Map};lf.index.Map.prototype.getName=function(){return this.name_};lf.index.Map.prototype.add=function(a,b){var c=this.map_.get(a,new goog.structs.Set);c.add(b);this.map_.set(a,c)};lf.index.Map.prototype.set=function(a,b){this.map_.set(a,new goog.structs.Set([b]))};lf.index.Map.prototype.remove=function(a,b){var c=this.map_.get(a);goog.isDefAndNotNull(c)&&(goog.isDefAndNotNull(b)?c.remove(b):c.clear(),0==c.getCount()&&this.map_.remove(a))};
lf.index.Map.prototype.get=function(a){a=this.map_.get(a);return goog.isDefAndNotNull(a)?a.getValues():[]};lf.index.Map.prototype.cost=function(a){return this.getRange(a).length};lf.index.Map.prototype.getRange=function(a){var b=[],c=(a||lf.index.KeyRange.all()).getComparator();this.map_.getKeys().sort().forEach(function(a){c(a)&&(b=b.concat(this.get(a)))},this);return b};lf.index.Map.prototype.clear=function(){return this.map_.clear()};lf.index.Map.prototype.containsKey=function(a){return this.map_.containsKey(a)};/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
lf.index.MemoryIndexStore=function(){this.store_=new goog.structs.Map};lf.index.MemoryIndexStore.prototype.init=function(a){a.getTables().forEach(function(a){this.getRowIdIndex(a.getName());a.getIndices().forEach(function(a){var b=a.getNormalizedName(),b=a.isUnique?new lf.index.AATree(b):new lf.index.Map(b);this.store_.set(a.getNormalizedName(),b)},this)},this);return goog.Promise.resolve()};lf.index.MemoryIndexStore.prototype.get=function(a){return this.store_.get(a,null)};
lf.index.MemoryIndexStore.prototype.getTableIndices=function(a){var b=[],c=a+".";this.store_.getKeys().forEach(function(a){-1!=a.indexOf(c)&&b.push(this.store_.get(a))},this);return b};lf.index.MemoryIndexStore.prototype.getRowIdIndex=function(a){a+=".#";var b=this.store_.get(a,null);goog.isNull(b)&&(b=new lf.index.RowId,this.store_.set(a,b));return b};/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
lf.proc.Runner=function(){this.usedScopes_=new goog.structs.Set;this.queue_=[]};lf.proc.Runner.prototype.scheduleTask=function(a,b){b?this.queue_.unshift(a):this.queue_.push(a);this.consumePending_();return a.getResolver().promise};lf.proc.Runner.prototype.consumePending_=function(){for(var a=this.queue_.slice(),b=0;b<a.length;b++){var c=a[b];this.usedScopes_.intersection(c.getScope()).isEmpty()&&(this.queue_.splice(b,1),this.execTask_(c))}};
lf.proc.Runner.prototype.execTask_=function(a){this.acquireScope_(a);a.exec().then(goog.bind(this.onTaskSuccess_,this,a),goog.bind(this.onTaskError_,this,a))};lf.proc.Runner.prototype.acquireScope_=function(a){a.getType()==lf.TransactionType.READ_WRITE&&this.usedScopes_.addAll(a.getScope())};lf.proc.Runner.prototype.releaseScope_=function(a){a.getType()==lf.TransactionType.READ_WRITE&&this.usedScopes_.removeAll(a.getScope())};
lf.proc.Runner.prototype.onTaskSuccess_=function(a,b){this.releaseScope_(a);a.getResolver().resolve(b);this.consumePending_()};lf.proc.Runner.prototype.onTaskError_=function(a,b){this.releaseScope_(a);a.getResolver().reject(b);this.consumePending_()};/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
lf.backstore.MemoryTable=function(){this.data_=new goog.structs.Map};lf.backstore.MemoryTable.prototype.get=function(a){if(0==a.length)return this.getAll_();var b=[];a.forEach(function(a){a=this.data_.get(a,null);goog.isNull(a)||b.push(a)},this);return goog.Promise.resolve(b)};lf.backstore.MemoryTable.prototype.getAll_=function(){return goog.Promise.resolve(this.data_.getValues())};lf.backstore.MemoryTable.prototype.put=function(a){a.forEach(function(a){this.data_.set(a.id(),a)},this);return goog.Promise.resolve()};
lf.backstore.MemoryTable.prototype.remove=function(a){a.forEach(function(a){this.data_.remove(a)},this);return goog.Promise.resolve()};lf.backstore.MemoryTable.prototype.pipe=function(a){};/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
lf.backstore.MemoryTx=function(a,b,c){lf.backstore.BaseTx.call(this,c,b);this.store_=a;this.logger_=goog.log.getLogger("lf.backstore.MemoryTx");b==lf.TransactionType.READ_ONLY&&this.resolver.resolve()};goog.inherits(lf.backstore.MemoryTx,lf.backstore.BaseTx);lf.backstore.MemoryTx.prototype.getLogger=function(){return this.logger_};lf.backstore.MemoryTx.prototype.getTable=function(a){return this.store_.getTableInternal(a.getName())};lf.backstore.MemoryTx.prototype.abort=function(){this.resolver.reject(void 0)};
lf.backstore.MemoryTx.prototype.commit=function(){lf.backstore.MemoryTx.superClass_.commit.call(this);this.resolver.resolve();return this.resolver.promise};/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
lf.backstore.Memory=function(a){this.schema_=a;this.tables_=new goog.structs.Map};lf.backstore.Memory.prototype.init=function(a){this.schema_.getTables().forEach(function(a){this.createTable(a.getName())},this);return goog.Promise.resolve()};lf.backstore.Memory.prototype.getTableInternal=function(a){var b=this.tables_.get(a,null);if(goog.isNull(b))throw new lf.Exception(lf.Exception.Type.DATA,"Table "+a+" does not exist.");return b};
lf.backstore.Memory.prototype.createTx=function(a,b){return new lf.backstore.MemoryTx(this,a,b)};lf.backstore.Memory.prototype.createTable=function(a){this.tables_.containsKey(a)||this.tables_.set(a,new lf.backstore.MemoryTable)};lf.backstore.Memory.prototype.close=function(){};/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
lf.cache.Prefetcher=function(){this.backStore_=lf.Global.get().getService(lf.service.BACK_STORE);this.indexStore_=lf.Global.get().getService(lf.service.INDEX_STORE)};lf.cache.Prefetcher.prototype.init=function(a){var b=a.getTables(),c=goog.bind(function(){if(0==b.length)return goog.Promise.resolve();var a=b.shift();return this.fetch_(a).then(c)},this);return c()};
lf.cache.Prefetcher.prototype.fetch_=function(a){var b=new lf.cache.Journal([a]);return this.backStore_.createTx(lf.TransactionType.READ_ONLY,b).getTable(a).get([]).then(goog.bind(function(b){lf.Global.get().getService(lf.service.CACHE).set(a.getName(),b);var d=this.indexStore_.getTableIndices(a.getName());b.forEach(function(a){d.forEach(function(b,c){var d=a.keyOfIndex(b.getName());b.set(d,a.id())})})},this))};/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
lf.base={};lf.base.BackStoreType={INDEXED_DB:0,MEMORY:1};
lf.base.init=function(a,b,c,d){var e=b==lf.base.BackStoreType.MEMORY?new lf.backstore.Memory(a):new lf.backstore.IndexedDB(a,d);lf.Global.reset();var f=lf.Global.get();return e.init(c).then(function(){f.registerService(lf.service.BACK_STORE,e);var b=new lf.proc.DefaultQueryEngine;f.registerService(lf.service.QUERY_ENGINE,b);b=new lf.proc.Runner;f.registerService(lf.service.RUNNER,b);b=new lf.cache.DefaultCache;f.registerService(lf.service.CACHE,b);b=new lf.index.MemoryIndexStore;f.registerService(lf.service.INDEX_STORE,
b);var c=new lf.eval.Registry;f.registerService(lf.service.EVAL_REGISTRY,c);c=new lf.ObserverRegistry;f.registerService(lf.service.OBSERVER_REGISTRY,c);return b.init(a)}).then(function(){return(new lf.cache.Prefetcher).init(a)})};lf.base.closeDatabase=function(a){a=lf.Global.get();try{a.getService(lf.service.BACK_STORE).close()}catch(b){}};/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
lf.query.DeleteBuilder=function(){lf.query.BaseBuilder.call(this);this.query=new lf.query.DeleteContext};goog.inherits(lf.query.DeleteBuilder,lf.query.BaseBuilder);lf.query.DeleteBuilder.prototype.from=function(a){this.assertFromPreconditions_();this.query.from=a;return this};lf.query.DeleteBuilder.prototype.where=function(a){this.assertWherePreconditions_();this.query.where=a;return this};
lf.query.DeleteBuilder.prototype.assertFromPreconditions_=function(){if(goog.isDefAndNotNull(this.query.from))throw new lf.Exception(lf.Exception.Type.SYNTAX,"from() has already been called.");};lf.query.DeleteBuilder.prototype.assertWherePreconditions_=function(){if(goog.isDefAndNotNull(this.query.where))throw new lf.Exception(lf.Exception.Type.SYNTAX,"where() has already been called.");};
lf.query.DeleteBuilder.prototype.assertExecPreconditions=function(){lf.query.DeleteBuilder.superClass_.assertExecPreconditions.call(this);if(!goog.isDefAndNotNull(this.query.from))throw new lf.Exception(lf.Exception.Type.SYNTAX,"Invalid usage of delete()");};lf.query.DeleteBuilder.prototype.bind=function(a){lf.query.BaseBuilder.bindValuesInSearchCondition(this.query,a);return this};/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
lf.Database=function(){};/*

 Copyright 2014 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
lf.query.SelectBuilder=function(a){lf.query.BaseBuilder.call(this);this.query=new lf.query.SelectContext;this.query.columns=a;this.checkDistinctColumn_();this.checkAggregations_()};goog.inherits(lf.query.SelectBuilder,lf.query.BaseBuilder);lf.query.SelectBuilder.prototype.assertExecPreconditions=function(){lf.query.SelectBuilder.superClass_.assertExecPreconditions.call(this);if(!goog.isDefAndNotNull(this.query.from))throw new lf.Exception(lf.Exception.Type.SYNTAX,"Invalid usage of select()");this.checkProjectionList_()};
lf.query.SelectBuilder.prototype.checkDistinctColumn_=function(){var a=this.query.columns.filter(function(a){return a instanceof lf.fn.AggregatedColumn&&a.aggregatorType==lf.fn.Type.DISTINCT},this);if(0!=a.length&&(1!=a.length||1!=this.query.columns.length))throw new lf.Exception(lf.Exception.Type.SYNTAX,"Invalid usage of lf.fn.distinct()");};lf.query.SelectBuilder.prototype.checkProjectionList_=function(){goog.isDefAndNotNull(this.query.groupBy)?this.checkGroupedByColumns_():this.checkProjectionListNotMixed_()};
lf.query.SelectBuilder.prototype.checkGroupedByColumns_=function(){var a=this.query.columns.filter(function(a){return!(a instanceof lf.fn.AggregatedColumn)}).some(function(a){return a.getNormalizedName()!=this.query.groupBy.getNormalizedName()},this);if(a=a||0==this.query.columns.length)throw new lf.Exception(lf.Exception.Type.SYNTAX,"Invalid combination of projection list and grouped by columns");};
lf.query.SelectBuilder.prototype.checkProjectionListNotMixed_=function(){var a=this.query.columns.some(function(a){return a instanceof lf.fn.AggregatedColumn},this),b=this.query.columns.some(function(a){return!(a instanceof lf.fn.AggregatedColumn)},this)||0==this.query.columns.length;if(a&&b)throw new lf.Exception(lf.Exception.Type.SYNTAX,"Invalid projection list, aggregated and non-aggregated can't be mixed.");};
lf.query.SelectBuilder.prototype.checkAggregations_=function(){this.query.columns.forEach(function(a){if(a instanceof lf.fn.AggregatedColumn&&!lf.query.SelectBuilder.isAggregationValid_(a.aggregatorType,a.getType()))throw new lf.Exception(lf.Exception.Type.SYNTAX,"Invalid aggregation detected for"+a.getNormalizedName());},this)};
lf.query.SelectBuilder.prototype.assertNotAlreadyCalled_=function(a,b){if(goog.isDefAndNotNull(a))throw new lf.Exception(lf.Exception.Type.SYNTAX,b+"() has already been called.");};lf.query.SelectBuilder.prototype.assertGreaterThanZero_=function(a,b){if(0>=a)throw new lf.Exception(lf.Exception.Type.SYNTAX,b+"() accepts only values greater than 0");};
lf.query.SelectBuilder.prototype.from=function(a){this.assertNotAlreadyCalled_(this.query.from,"from");this.query.from=Array.prototype.slice.call(arguments);return this};lf.query.SelectBuilder.prototype.where=function(a){this.assertNotAlreadyCalled_(this.query.where,"where");this.query.where=a;return this};lf.query.SelectBuilder.prototype.innerJoin=function(a,b){this.assertNotAlreadyCalled_(this.query.innerJoin,"innerJoin");this.query.innerJoin={table:a,predicate:b};return this};
lf.query.SelectBuilder.prototype.leftOuterJoin=function(a){return this};lf.query.SelectBuilder.prototype.limit=function(a){this.assertNotAlreadyCalled_(this.query.limit,"limit");this.assertGreaterThanZero_(a,"limit");this.query.limit=a;return this};lf.query.SelectBuilder.prototype.skip=function(a){this.assertNotAlreadyCalled_(this.query.skip,"skip");this.assertGreaterThanZero_(a,"skip");this.query.skip=a;return this};
lf.query.SelectBuilder.prototype.orderBy=function(a,b){goog.isDefAndNotNull(this.query.orderBy)||(this.query.orderBy=[]);this.query.orderBy.push({column:a,order:goog.isDefAndNotNull(b)?b:lf.Order.ASC});return this};lf.query.SelectBuilder.prototype.groupBy=function(a){this.assertNotAlreadyCalled_(this.query.groupBy,"groupBy");this.query.groupBy=a;return this};
lf.query.SelectBuilder.isAggregationValid_=function(a,b){switch(a){case lf.fn.Type.COUNT:case lf.fn.Type.DISTINCT:return!0;case lf.fn.Type.AVG:case lf.fn.Type.STDDEV:case lf.fn.Type.SUM:return b==lf.Type.NUMBER||b==lf.Type.INTEGER;case lf.fn.Type.MAX:case lf.fn.Type.MIN:return b==lf.Type.NUMBER||b==lf.Type.INTEGER||b==lf.Type.STRING||b==lf.Type.DATE_TIME}return!1};
lf.query.SelectBuilder.prototype.bind=function(a){lf.query.BaseBuilder.bindValuesInSearchCondition(this.query,a);this.query.currentVersion++;return this};movie.db.getInstance=function(a,b){return(new movie.db.Database).init(a,b?lf.base.BackStoreType.MEMORY:void 0)};movie.db.Database=function(){this.schema_=new movie.db.schema.Database;this.initialized_=!1};movie.db.Database.prototype.init=function(a,b){return lf.base.init(this.schema_,b||lf.base.BackStoreType.INDEXED_DB,a,!1).then(goog.bind(function(){this.initialized_=!0;return this},this))};movie.db.Database.prototype.getSchema=function(){return this.schema_};
movie.db.Database.prototype.checkInit_=function(){if(!this.initialized_)throw new lf.Exception(lf.Exception.Type.UNINITIALIZED,"Database is not initialized");};movie.db.Database.prototype.select=function(a){this.checkInit_();var b=1!=arguments.length||goog.isDefAndNotNull(arguments[0])?Array.prototype.slice.call(arguments):[];return new lf.query.SelectBuilder(b)};movie.db.Database.prototype.insert=function(){this.checkInit_();return new lf.query.InsertBuilder};
movie.db.Database.prototype.insertOrReplace=function(){this.checkInit_();return new lf.query.InsertBuilder(!0)};movie.db.Database.prototype.update=function(a){this.checkInit_();return new lf.query.UpdateBuilder(a)};movie.db.Database.prototype.delete=function(){this.checkInit_();return new lf.query.DeleteBuilder};movie.db.Database.prototype.createTransaction=function(a){this.checkInit_();return new movie.db.Transaction};
movie.db.Database.prototype.close=function(){lf.base.closeDatabase(this.schema_);this.initialized_=!1};
