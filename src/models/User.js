import {Model} from 'pinia-orm'

export default class User extends Model {
    static entity = 'users'

    static fields() {
        return {
            id: this.uid(),
            name: this.string(''),
            email: this.string('')
        }
    }
}
