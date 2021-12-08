package main;

import response.Course;
import response.User;

import java.util.ArrayList;


public class Storage {
    private static ArrayList<User> users = new ArrayList<>();
    private static ArrayList<Course> courses = new ArrayList<>();

    public static int add(User user){
        users.add(user);
        return user.getId();
    }

    public static ArrayList<User> getAllUsers(){
        return (ArrayList<User>) users.clone();
    }

    public static User getUser(int id){
        return users.get(id);
    }

    public static void addCourse(Course course){
        courses.add(course);
    }

    public static ArrayList<Course> getAllCourses(){
        return (ArrayList<Course>) courses.clone();
    }

    public static Course getCourse(int id){
        return courses.get(id);
    }
}
