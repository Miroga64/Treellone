package response;

import java.util.ArrayList;

public class User {
    private int id;
    private String login;
    private String firstName;
    private String lastName;
    private ArrayList<Course> ownCourses;
    private String email;
    private String password;
    private int age;
    private String sex;
    private String city;
    private String phone;

    public User(int id, String login, String firstName, String lastName, ArrayList<Course> ownCourses, String email, String password, int age, String sex, String city, String phone) {
        this.id = id;
        this.login = login;
        this.firstName = firstName;
        this.lastName = lastName;
        this.ownCourses = ownCourses;
        this.email = email;
        this.password = password;
        this.age = age;
        this.sex = sex;
        this.city = city;
        this.phone = phone;
        
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public ArrayList<Course> getOwnCourses() {
        return ownCourses;
    }

    public void setOwnCourses(ArrayList<Course> ownCourses) {
        this.ownCourses = ownCourses;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }
}
