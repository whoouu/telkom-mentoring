import Layout from "../../../components/Layout/Layout.jsx";
import { FormControl, MenuItem, Select } from "@mui/material";
import { MentorsList } from "../../../constants/mentorList.js";
import ImageCard from "../../../components/Card/ImageCard.jsx";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const SearchPage = () => {
    const [fac, setFac] = useState("none");
    const [foc, setFoc] = useState('none');
    const [expretise, setExpertise] = useState('none');
    const [searchParams] = useSearchParams();
    const keyword = searchParams.get("keyword");
    console.log("search: ", searchParams.get("keyword"))

    return (
      <Layout>
          <div className="px-10 py-8 overflow-auto flex-1">
              <h1 className="text-[26px] font-bold mb-3">Mentors</h1>
              <p className={"text-[18px] mb-4"}>Menampilkan Mentor <b>"{keyword}"</b></p>
              {/* filter input */}
              <div className={"flex gap-3 items-center"}>
                  <FormControl sx={{ m: 1, minWidth: 420 }}>
                      <Select
                        value={fac}
                        onChange={(e) => setFac(e.target.value)}
                        placeholder="Fakultas"
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                      >
                          <MenuItem value="none">
                              <em>Fakultas</em>
                          </MenuItem>
                          <MenuItem value={'fri'}>Rekayasa Industri</MenuItem>
                          <MenuItem value={'fif'}>Informatika</MenuItem>
                          <MenuItem value={'fit'}>Ilmu Terapan</MenuItem>
                      </Select>
                  </FormControl>

                  <FormControl sx={{ m: 1, minWidth: 420 }}>
                      <Select
                        value={foc}
                        onChange={(e) => setFoc(e.target.value)}
                        placeholder="Fakultas"
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                      >
                          <MenuItem value="none">
                              <em>Jurusan</em>
                          </MenuItem>
                          <MenuItem value={'fri'}>Sistem Informasi</MenuItem>
                          <MenuItem value={'fif'}>Informatika</MenuItem>
                          <MenuItem value={'fit'}>Telekomunikasi</MenuItem>
                      </Select>
                  </FormControl>

                  <FormControl sx={{ m: 1, minWidth: 420 }}>
                      <Select
                        value={expretise}
                        onChange={(e) => setExpertise(e.target.value)}
                        placeholder="Fakultas"
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                      >
                          <MenuItem value="none">
                              <em>Expertise</em>
                          </MenuItem>
                          <MenuItem value={'fri'}>Programming</MenuItem>
                          <MenuItem value={'fif'}>Data Scientist</MenuItem>
                          <MenuItem value={'fit'}>Machine Learning</MenuItem>
                      </Select>
                  </FormControl>
              </div>
              {/* container card */}
              <div className="w-full grid gap-4 mt-5 sm:grid-cols-2 md:grid-cols-4">
                  {MentorsList.map((data, index) => {
                      return <ImageCard key={index} {...data} />;
                  })}
              </div>
          </div>
      </Layout>
    );
}

export default SearchPage