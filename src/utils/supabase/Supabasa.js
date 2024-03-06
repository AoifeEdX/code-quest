import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ytipdxgirdozpzcdvtip.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl0aXBkeGdpcmRvenB6Y2R2dGlwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk2OTY1NDksImV4cCI6MjAyNTI3MjU0OX0.nglExYZ7Tq9JtgaGM4pqvJC6-rNm0gfoTRsB_Zu4Nns';

const supabase = createClient(supabaseUrl, supabaseKey);

export async function sendData() {
   const { data, error } = await supabase
    .from('players')
    .insert([
      { id: 1, name: 'Denmark', points: '10' },
    ]);

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