import usermodel from "../Models/usermodel.js";
export const create = async (req, res) => {
    try {
        const userData = new usermodel(req.body);
        if (!userData) {
            return res.status(404).json({ msg: "user dat not found" });
        }
        const saveData = await userData.save();
        return res.status(200).json(saveData);
    } catch (error) {
        res.status(500).json({ error });
    }
}
export const getAll = async (req, res) => {
    try {
        const userData1 = await usermodel.find();
        if (userData1.length === 0) {
            return res.status(404).json({ msg: "User Data not Found" });
        }
        res.status(200).json(userData1);
    } catch (error) {
        res.status(500).json({ error });
    }
}
export const getone = async (req ,res) => {
    try{
        const id = req.params.id;
        const userexist = await usermodel.findById(id);
        if(!userexist){
            return res.status(404).json({msg:"No such user"});
        }
        res.status(200).json(userexist);
    } catch (error) {
        res.status(500).json({ error });
    }
    }
export const update = async (req ,res) => {
    try {
        const id = req.params.id;
        const { name, role } = req.query;
        const user = await usermodel.findByIdAndUpdate(id, { name, role }, { new: true });
        if (!user) {
            return res.status(404).json({ msg: "No such user" });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error });
    }
};
export const delet = async (req ,res) => {
    try{
        const id = req.params.id;
        const  user = await usermodel.findByIdAndDelete(id);
        if(!user)
        if (!user) {
            return res.status(404).json({ msg: "No such user" });
        }
        res.status(200).json({ msg: "User deleted successfully" });
    } catch (error) {
        res.status(500).json({ error });
    }
    }