import {expectType} from 'tsd';
import {card, cvc, expiration} from '.';

expectType<string>(card.parse('4242424242424242'))

expectType<string>(card.format('4242424242424242'))
expectType<string>(card.format('4242424242424242', '-'))

expectType<string>(card.type('4242424242424242'))
