import { cards } from "../../../data";

export default (req, res) => {
  res.status(200).json(cards);
};
