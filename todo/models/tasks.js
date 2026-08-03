const pool = require("../database/db");


class Task {

    constructor(data) {
        this.id = data.id;
        this.description = data.description;
        this.status = data.status;
        this.createdAt = data.created_at || data.createdAt;
        this.updatedAt = data.updated_at || data.updatedAt;
    }



    static async create(data) {
        const result = await pool.query(
            `
            INSERT INTO tasks
            (
                description,
                status
            )

            VALUES($1,$2)

            RETURNING *
            `,
            [
                data.description,
                data.status || "todo"
            ]

        );

        return new Task(result.rows[0]);
    }




    static async findAll() {
        const result = await pool.query(

            `
            SELECT *
            FROM tasks
            ORDER BY created_at DESC
            `

        );

        return result.rows.map(
            row => new Task(row)
        );

    }


    static async findById(id) {
        const result = await pool.query(
            `
            SELECT *
            FROM tasks
            WHERE id=$1
            `,

            [id]
        );
        if(result.rows.length === 0)
            return null;


        return new Task(result.rows[0]);
    }

    static async update(id,data) {
        const result = await pool.query(

            `
            UPDATE tasks
            SET
            description = COALESCE($1,description),
            status = COALESCE($2,status),
            updated_at = CURRENT_TIMESTAMP

            WHERE id=$3
            RETURNING *

            `,
            [
                data.description,
                data.status,
                id
            ]
        );

        if(result.rows.length === 0)
            return null;

        return new Task(result.rows[0]);
    }


    static async delete(id) {
        const result = await pool.query(
            `
            DELETE FROM tasks
            WHERE id=$1
            RETURNING id
            `,
            [id]

        );

        return result.rowCount > 0;

    }

}


module.exports = Task;