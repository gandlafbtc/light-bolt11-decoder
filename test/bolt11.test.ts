import { decode } from "../src/bolt11";

const invoice = 'lnbc1u1p3m2f66sp5h8xk9v7juaw9ya0h9vkve5x7eh7a0dn365ws38c0ywqlhwdmlw3qpp5qymg8rdrgmv69ul9q094n6lk796saxvkuufgfycp7yufp75vmduqdq2f38xy6t5wvxqyjw5qcqpjrzjqtlvzs20gnz95lx7magl5eap43yz3ljgmk6dcr94fvtzsyj9st7kcz6rj5qq2asqqyqqqqqqqqqqymqq9q9qyysgqdgc8vf3pduxl546czg2u4ze8mqysjct3a2jtw5vx3uy66ctd07k5yuq6vr3cvprc0g46jn2k6mks267ewrjdhpa059vv73zv8gwplncpu9qse0'

describe('test decode bolt11...', () => {
    test('test decode ', async () => {
        expect(decode(invoice).sections.filter((v, i, a) => { if (i < 5 && i > 1) return true })).toEqual([
        { name: 'amount', letters: '1u', value: '100000' },
        { name: 'separator', letters: '1' },
        { name: 'timestamp', letters: 'p3m2f66', value: 1672816474 }])
    })
}
)
