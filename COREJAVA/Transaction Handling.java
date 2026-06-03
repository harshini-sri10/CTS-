import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;

public class TransactionExample {

    public static void main(String[] args) {

        try {

            Connection con = DriverManager.getConnection(
                    "jdbc:mysql://localhost:3306/bankdb",
                    "root",
                    "password");

            con.setAutoCommit(false);

            PreparedStatement debit =
                    con.prepareStatement(
                    "UPDATE accounts SET balance=balance-500 WHERE id=1");

            PreparedStatement credit =
                    con.prepareStatement(
                    "UPDATE accounts SET balance=balance+500 WHERE id=2");

            debit.executeUpdate();
            credit.executeUpdate();

            con.commit();

            System.out.println("Transfer Successful");

            con.close();

        } catch (Exception e) {
            System.out.println(e);
        }
    }
}
