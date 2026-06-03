import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;

public class StudentDAO {

    public static void insertStudent(int id, String name) {

        try {
            Connection con = DriverManager.getConnection(
                    "jdbc:mysql://localhost:3306/studentdb",
                    "root",
                    "password");

            String sql =
                    "INSERT INTO students(id,name) VALUES(?,?)";

            PreparedStatement ps =
                    con.prepareStatement(sql);

            ps.setInt(1, id);
            ps.setString(2, name);

            ps.executeUpdate();

            System.out.println("Inserted");

            con.close();

        } catch (Exception e) {
            System.out.println(e);
        }
    }

    public static void updateStudent(int id, String name) {

        try {
            Connection con = DriverManager.getConnection(
                    "jdbc:mysql://localhost:3306/studentdb",
                    "root",
                    "password");

            String sql =
                    "UPDATE students SET name=? WHERE id=?";

            PreparedStatement ps =
                    con.prepareStatement(sql);

            ps.setString(1, name);
            ps.setInt(2, id);

            ps.executeUpdate();

            System.out.println("Updated");

            con.close();

        } catch (Exception e) {
            System.out.println(e);
        }
    }

    public static void main(String[] args) {

        insertStudent(1, "Ravi");
        updateStudent(1, "Kumar");
    }
}
