import { regist } from './components/value/index'

import { TYPE_JSON_BOOLEAN ,TYPE_JSON_NUMBER,TYPE_JSON_NULL,TYPE_JSON_STRING} from '@0rz/lang-json'
import JsonBooleanRender from './components/json/JsonBooleanRender.vue'
import JsonNullRender from './components/json/JsonNullRender.vue'
import JsonNumberRender from './components/json/JsonNumberRender.vue'
import JsonStringRender from './components/json/JsonStringRender.vue'

import { TYPE_LANG_FUNCTION } from '@0rz/lang'
import ValueFunctionRender from './components/value/ValueFunctionRender.vue'


regist(TYPE_JSON_BOOLEAN, JsonBooleanRender)
regist(TYPE_JSON_NUMBER, JsonNumberRender)
regist(TYPE_JSON_NULL, JsonNullRender)
regist(TYPE_JSON_STRING, JsonStringRender)

regist(TYPE_LANG_FUNCTION, ValueFunctionRender)