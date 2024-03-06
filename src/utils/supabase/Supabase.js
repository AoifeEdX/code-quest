import { createClient } from '@supabase/supabase-js'
import toast from 'react-hot-toast';

const supabaseUrl = 'https://ytipdxgirdozpzcdvtip.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl0aXBkeGdpcmRvenB6Y2R2dGlwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk2OTY1NDksImV4cCI6MjAyNTI3MjU0OX0.nglExYZ7Tq9JtgaGM4pqvJC6-rNm0gfoTRsB_Zu4Nns';

const supabase = createClient(supabaseUrl, supabaseKey);

// function that insert data to the supabase

export async function insertDataIntoTable() {
  const storedUserData = localStorage.getItem('currentUser');
  const currentUser = storedUserData ? JSON.parse(storedUserData) : { name: '', points: 0 };
  const dataToInsert = {name: currentUser.name, score: parseInt(currentUser.points)};
  const { data, error } = await supabase
      .from('players')
      .insert([dataToInsert]);
    if (error) {
      toast.error('Error inserting data');
    }
}

// function that insert data to the supabase

export async function getAllDataFromSupabase() {
    const { data, error } = await supabase
      .from('players')
      .select('*');

    if (error) {
      toast.error('Error fetching data');
    } else {
      return (data);
    }
  }

