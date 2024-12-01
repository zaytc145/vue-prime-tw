import {AbilityBuilder, createMongoAbility} from '@casl/ability';

// define abilities
const {can: allow, build} = new AbilityBuilder(createMongoAbility);

allow('read', 'Post');

const ability = build();

export default ability;
