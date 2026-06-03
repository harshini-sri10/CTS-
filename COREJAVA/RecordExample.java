import java.util.List;

record Person(String name, int age) {}

public class RecordExample {

    public static void main(String[] args) {

        List<Person> people = List.of(
                new Person("Ravi", 20),
                new Person("Anu", 17),
                new Person("Kumar", 25)
        );

        people.stream()
                .filter(p -> p.age() >= 18)
                .forEach(System.out::println);
    }
}
