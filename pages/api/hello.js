import { withSSRContext } from "aws-amplify";
import "../../configureAmplify";

export default async function handler(req, res) {
  const { Auth } = withSSRContext({ req });
  const user = Auth.currentAuthenticatedUser();
  res.status(200).json({ name: user });
}
