import { ref } from 'vue'
import { json, TYPE_JSON_NUMBER, ValueJsonNumber } from '@0rz/lang-json'
import { create } from '@0rz/utils'
import { LangCall, LangCustomFunction, LangGetter, LangModule, LangNamespace, LangReturn, LangScope, LangScopeRef, LangType, TYPE_LANG_FUNCTION } from '@0rz/lang'


const namespace_json_ext = LangNamespace.create('json-ext')

const zero = create(new LangCustomFunction(), {
    argus: [],
    result: LangType.of(TYPE_JSON_NUMBER),
    body: create(new LangReturn(), { target: create(new ValueJsonNumber(0), {}) })
})

const add_one = create(new LangCustomFunction(), {
    argus: [['current', LangType.of(TYPE_JSON_NUMBER)]],
    scope: create(
        LangScope.create([
            ['current', new ValueJsonNumber(0), LangType.of(TYPE_JSON_NUMBER)]
        ]),
        { key: 'json-ext-num-next-argus' }
    ),
    result: LangType.of(TYPE_JSON_NUMBER),
    body: create(new LangReturn(), {
        target: create(new LangCall(), {
            fn: create(new LangGetter(), { name: 'num.add', scope: create(new LangScopeRef(), { keys: ['lang-json'] }) }),
            inputs: [
                create(new LangGetter(), {
                    name: 'current',
                    scope: create(new LangScopeRef(), { keys: ['json-ext-num-next-argus'] })
                }),
                new ValueJsonNumber(1)
            ]
        })
    })
})

const json_ext_mod = create(new LangModule(), {
    id: namespace_json_ext.mod('json-ext-mod'),
    scope: create(LangScope.create([
        ['zero', zero, LangType.of(TYPE_LANG_FUNCTION)],
        ['add_one', add_one, LangType.of(TYPE_LANG_FUNCTION)],
    ]), {
        key: 'json-ext'
    }),
    types: LangType.of()
})


export const mods = ref([json,json_ext_mod])