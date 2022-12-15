import { expect, test } from '@jest/globals';
import { eMeta, eModel, eType, FuncInfo, FiledInfo, eKey, eJson, fromJson, toJson } from '../src/index'

test('eModel', () => {
    @eModel('aaa') class AAA { }
    expect((AAA as any).$meta).toBe('aaa')
    expect(eMeta.name2func.get('aaa')).toBe(Object.getPrototypeOf(AAA))
    expect(eMeta.info.get('aaa')).toBeInstanceOf(FuncInfo)
    expect(eMeta.info.get('aaa')?.name).toBe('aaa')
});

test('eType', () => {
    @eModel('bbb') class BBB {
        @eType('number')
        b: number = 0
    }
    expect((BBB as any).$meta).toBe('bbb')
    expect(eMeta.name2func.get('bbb')).toBe(Object.getPrototypeOf(BBB))
    expect(eMeta.info.get('bbb')).toBeInstanceOf(FuncInfo)
    expect(eMeta.info.get('bbb')?.fileds['b']).toBeInstanceOf(FiledInfo)
    expect(eMeta.info.get('bbb')?.fileds['b'].type).toBe('number')
});

test('eKey', () => {
    @eModel('ccc') class CCC {
        @eKey
        cid: string = 'test'
    }
    expect((CCC as any).$meta).toBe('ccc')
    expect(eMeta.info.get('ccc')).toBeInstanceOf(FuncInfo)
    expect(eMeta.info.get('ccc')?.keyFiled).toBe('cid')
});


test('eJson', () => {
    @eModel('ddd') class DDD {
        @eJson('abcd')
        @eType('string')
        ddd: string = 'test'
    }
    expect((DDD as any).$meta).toBe('ddd')
    expect(fromJson(DDD, { abcd: 'test2' }).ddd).toBe('test2')
    expect(fromJson(DDD, { abcd: 'test2' }) instanceof DDD).toBe(true)
    expect(toJson(new DDD).abcd).toBe('test')


    
    @eModel('eee') class EEE {
        @eJson('abcd')
        @eType('datetime')
        ddd: Date = new Date()
    }

    const eee = fromJson(EEE, { abcd: '2022-07-21 12:00:57' })

    expect(eee.ddd.toLocaleString()).toBe('2022/7/21 12:00:57')
    
    expect(toJson(eee).abcd).toBe('2022/7/21 12:00:57')
});