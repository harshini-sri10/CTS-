import java.lang.reflect.Method;

class Student {

    public void show() {
        System.out.println("Student Method");
    }
}

public class ReflectionExample {

    public static void main(String[] args)
            throws Exception {

        Class<?> c =
                Class.forName("Student");

        Method[] methods =
                c.getDeclaredMethods();

        for (Method m : methods) {
            System.out.println(m.getName());
        }

        Object obj =
                c.getDeclaredConstructor()
                .newInstance();

        Method method =
                c.getMethod("show");

        method.invoke(obj);
    }
}
