
export const index = (req, res) => {
    res.json({
        description: "API to test user validation rules",
        endpoints: {
            users: ['GET', 'POST'],
        },
    });
  };