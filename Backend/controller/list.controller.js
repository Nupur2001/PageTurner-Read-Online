import List from "../modal/list.modal.js";

export const getList = async (req, res) => {
  try {
    const list = await List.find();
    return res.status(200).json(list); // Return data as response
  } catch (error) {
    console.log("Error: ", error);
    return res.status(500).json(error); // Send error response
  }
};
