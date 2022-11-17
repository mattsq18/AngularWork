export class GlobalConstants {
    public err: string = "Whoops... Somethings not right";

    public existErr: string = "This already exists...";

    public added: string = "successfully added.";

    public userRegex: string = "[a-zA-Z0-9]*";

    public mailRegex: String = "[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}";

    public pwdRegex: string = "/^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/";

    public phoneRegex: string = "^[e0-9]{10,10}";
}