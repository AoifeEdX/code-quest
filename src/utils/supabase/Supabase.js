import { createClient } from '@supabase/supabase-js'
import toast from 'react-hot-toast';

const supabaseUrl = 'https://ytipdxgirdozpzcdvtip.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl0aXBkeGdpcmRvenB6Y2R2dGlwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk2OTY1NDksImV4cCI6MjAyNTI3MjU0OX0.nglExYZ7Tq9JtgaGM4pqvJC6-rNm0gfoTRsB_Zu4Nns';

const supabase = createClient(supabaseUrl, supabaseKey);

export async function sendData() {
   const { data, error } = await supabase
    .from('players')
    .insert([
      { name: 'Denmark', score: 10 },
    ]);

  if (error) {
    toast.error('Error inserting data');
    //console.error('Error inserting data:', error);
  } else {
    //console.log('Data inserted successfully:', data);
    toast.success('Data inserted successfully');
  }
}

// Формирование объекта данных
const dataToInsert = {
  name: 'Nicolas',
  score: 10,
};

// Использование Supabase Client для вставки данных
export async function insertDataIntoTable() {
    const { data, error } = await supabase
      .from('players')
      .insert([dataToInsert]);

    if (error) {
      console.error('Ошибка при вставке данных:', error);
      toast.error('Error inserting data');
    } else {
      console.log('Данные успешно вставлены:', data);
      toast.success('Data inserted successfully');
    }
}

export async function getAllDataFromSupabase() {
    const { data, error } = await supabase
      .from('players') // Replace 'your_table_name' with the actual name of your table
      .select('*'); // Select all columns

    if (error) {
      toast.error('Error  fetching data');
    } else {
      //const playersData = await data.json()
      //console.log('Все данные из таблицы:', data);
      return (data);
    }
  }

export async function getPlayerData() {
  const { data, error } = await supabase
    .from('users')
    .select('id', 'name');
  
    if (error) {
    console.error('Error inserting data:', error);
  } else {
    console.log('Data inserted successfully:', data);
  }
}
//sendData();


export const updateLeaderBordStorage = () => {
  const storedUserData = localStorage.getItem('currentUser');
  const storedLeaderboard = localStorage.getItem('leaderboard');
  const leaderboardData = storedLeaderboard ? JSON.parse(storedLeaderboard) : [];
  const currentUser = storedUserData ? JSON.parse(storedUserData) : { name: '', points: 0 };
  const updatedLeaderboardData = [...leaderboardData, currentUser];
  localStorage.setItem('leaderboard', JSON.stringify(updatedLeaderboardData));
};

// Call the function to send data
//sendData();

/*const { error } = await supabase
  .from('players')
  .insert({ id: 1, name: 'Denmark', points: '10' })

  const { error } = await supabase
  .from('countries')
  .update({ name: 'Australia' })
  .eq('id', 1)

  const { error } = await supabase
  .from('countries')
  .delete()
  .eq('id', 1)

  const { data, error } = await supabase
  .from('countries')
  .select()
  .like('name', '%Alba%')
  */