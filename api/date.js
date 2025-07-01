export default function handler(req, res) {
  const now = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(now.getDate() + 1);

  const format = (d) =>
    `${String(d.getDate()).padStart(2, '0')}/${String(d.getMonth() + 1).padStart(2, '0')}/${d.getFullYear()}`;

  res.status(200).json({
    current_date: format(now),
    tomorrow_date: format(tomorrow),
  });
}
