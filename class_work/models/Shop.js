const AWS = require("aws-sdk");
AWS.config.update({
  accessKeyId: "xbcjq3",
  secretAccessKey: "ytdfw8",
  endpoint: "http://localhost:8000",
  region: "us-east-1",
});
var docClient = new AWS.DynamoDB.DocumentClient({ apiVersion: "2012-08-10" });
const createShop = async (id, name) => {
  const params = {
    TableName: "shops",
    Item: {
      id: id,
      name: name
    }
  };

  try {
    const data = await docClient.put(params).promise();
    console.log("Shop created successfully:", data);
    return data;
  } catch (err) {
    console.error("Error creating shop:", err);
    throw err;
  }
};

// Function to get shop details by ID
const getShopDetails = async (shopId) => {
  const params = {
    TableName: "shops",
    Key: {
      id: parseInt(shopId)
    }
  };

  try {
    const data = await docClient.get(params).promise();
    console.log("Shop details:", data.Item);
    return data.Item;
  } catch (err) {
    console.error("Error getting shop details:", err);
    throw err;
  }
};

// Function to update shop details
const updateShop = async (id, name) => {
  const params = {
    TableName: "shops",
    Key: {
      id: id
    },
    UpdateExpression: "set #n = :name",
    ExpressionAttributeNames: {
      "#n": "name"
    },
    ExpressionAttributeValues: {
      ":name": name
    },
    ReturnValues: "ALL_NEW"
  };

  try {
    const data = await docClient.update(params).promise();
    console.log("Shop updated successfully:", data);
    return data.Attributes;
  } catch (err) {
    console.error("Error updating shop:", err);
    throw err;
  }
};

// Function to delete a shop by ID
const deleteShop = async (id) => {
  const params = {
    TableName: "shops",
    Key: {
      id: id
    }
  };

  try {
    const data = await docClient.delete(params).promise();
    console.log("Shop deleted successfully:", data);
    return data;
  } catch (err) {
    console.error("Error deleting shop:", err);
    throw err;
  }
};
module.exports = {
  getShopDetails,
  createShop,
  updateShop,
  deleteShop
};
