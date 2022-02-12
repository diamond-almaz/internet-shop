enum Cmds {
  goods = "goods",
  dealers = "dealers",
}

const request = async (cmd: Cmds) => {
  const response = await fetch(
    `https://murmuring-tor-81614.herokuapp.com/api/${cmd}/`
  );

  return await response.json();
};

export const getProducts = async () => request(Cmds.goods);

export const getDealers = async () => request(Cmds.dealers);
