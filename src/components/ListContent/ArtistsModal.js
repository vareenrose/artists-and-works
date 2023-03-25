import React, { useEffect, useState } from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from "mdb-react-ui-kit";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import {
  Card,
  CardActions,
  Grid,
  CardActionArea,
  CircularProgress,
  Paper,
} from "@mui/material";

export default function ArtistsModal(props) {
  const [scrollableModal, setScrollableModal] = useState(props.artists_modal);
  useEffect(() => {
    setScrollableModal(props.artists_modal);
  }, [props.artists_modal]);

  return (
    <>
      {/* <MDBBtn onClick={() => setScrollableModal(!scrollableModal)}>LAUNCH DEMO MODAL</MDBBtn> */}

      <MDBModal
        show={scrollableModal}
        setShow={setScrollableModal}
        tabIndex="-1"
      >
        <MDBModalDialog scrollable>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Artists Images</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={() => setScrollableModal(!scrollableModal)}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <Grid
                container
                spacing={2}
                sx={{ width: "100%", mt: 3, justifyContent: "center" }}
              >
                {props.artists_images ? (
                  props.artists_images.map((item, index) => (
                    <Grid
                      item
                      component={Paper}
                      elevation={0}
                      sx={{ backgroundColor: "transparent" }}
                    >
                      <CardActionArea>
                        <img
                          key={index}
                          src={`${item.url}?w=350&fit=crop&auto=format`}
                          srcSet={`${item.url}?w=350&fit=crop&auto=format&dpr=2 2x`}
                          alt={"artists images"}
                          loading="lazy"
                          style={{
                            width: "20vw",
                            height: "25vh",
                            borderRadius: "20px",
                            objectFit: "cover",
                          }}
                        />
                      </CardActionArea>
                      <ImageListItemBar
                        title={item.filename}
                        subtitle={item.filename}
                        position="below"
                        sx={{ textAlign: "left", paddingLeft: "5px" }}
                      />
                    </Grid>
                  ))
                ) : (
                  <CircularProgress color="secondary" />
                )}
              </Grid>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn
                color="secondary"
                onClick={() => setScrollableModal(!setScrollableModal)}
              >
                Close
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}
