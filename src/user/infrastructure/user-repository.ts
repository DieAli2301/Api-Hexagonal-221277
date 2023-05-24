import { getConnection } from "../../database";
import { GetUser } from "../domain/get-user";
import { User } from "../domain/user";

export class UserRepository implements GetUser {
  async getById(userId: number): Promise<User | null> {
    const connection = await getConnection();
    const rows: any[] = await connection.query("SELECT * FROM users ");
    // Aquí debes usar el método adecuado para liberar la conexión en tu biblioteca de bases de datos

    if (rows.length === 0) {
      return null;
    }

    const user = rows[0];
    console.log("los usuarios son", rows[0]); //si tiene datos la consulta, nunca esta vacio

    return user;
  }
}
