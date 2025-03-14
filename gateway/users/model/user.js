class User {
    constructor(id, email, password, role) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.role = role;
    }

    get id() {
        return this.id;
    }

    get email() {
        return this.email;
    }

    get password() {
        return this.password;
    }

    get role() {
        return this.role;
    }

    set id(id) {
        this.id = id;
    }

    set email(email) {
        this.email = email;
    }

    set password(password) {
        this.password = password;
    }

    set role(role) {
        this.role = role;
    }
}