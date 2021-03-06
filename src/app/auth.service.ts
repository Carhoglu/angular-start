import * as firebase from 'firebase';
export class AuthService {
    signupUser(email: string, password: string) {

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch(
                error => console.error()
            )
    }

    signinUser (email : string , password : string) {
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(
           response => console.error(response)
        )
        .catch(
           error =>   console.error(error)
        );

    }
}