import {expectType} from 'tsd';
import {card, cvc, expiration} from '.';

expectType<string>(card.parse('4242424242424242'))

expectType<string>(card.format('4242424242424242'))
expectType<string>(card.format('4242424242424242', '-'))

expectType<string | undefined>(card.type('4242424242424242'))

expectType<boolean>(card.luhn('4242424242424242'))

expectType<boolean>(card.isValid('4242424242424242'))
expectType<boolean>(card.isValid('4242424242424242', 'Visa'))

expectType<boolean>(cvc.isValid('123'))
expectType<boolean>(cvc.isValid('123', 'Visa'))

expectType<boolean>(expiration.isPast(0, 2021))

expectType<boolean>(expiration.month.isValid(0))

expectType<number>(expiration.month.parse(1))
expectType<number>(expiration.month.parse('1'))

expectType<boolean>(expiration.year.isPast(2020))

expectType<boolean>(expiration.year.isValid(2020))

expectType<number>(expiration.year.parse(2020))
expectType<number>(expiration.year.parse(20, true))
expectType<number>(expiration.year.parse('2020'))

expectType<string>(expiration.year.format(2020))
expectType<string>(expiration.year.format(2020, true))
