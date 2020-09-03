const { Model } = require("objection");

class BaseModel extends Model {
    $beforeUpdate() {
        const now = new Date().toISOString();
        this.createdAt = now;
        this.updatedAt = now;
    }

    $afterUpdate() {
        this.updatedAt = new Date().toISOString();
    }
}

module.exports = BaseModel;
