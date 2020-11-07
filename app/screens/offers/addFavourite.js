import { getUserData } from "constants/commonFunctions";

const { ADD_FAVOURITE } = require("graphql/mutations");

const addFavourite = async (client, offer_id) => {

  const { id } = await getUserData();

  let { data } = await client.mutate({
    mutation: ADD_FAVOURITE,
    variables: {
      user_id: Number(id),
      offer_id: Number(offer_id)
    }
  });

  return data?.addFavourite?.status;
}

export default addFavourite;